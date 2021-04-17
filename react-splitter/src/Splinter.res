open Resizer

let processChildren = element => {
  if !ReactHelper.isElementTypeEqual(element, Pane.make) {
    failwith("Only Pane elements supported as children")
  }

  element
}

type paneProps = {size: option<int>, _renderResizer: option<unit => React.element>}



let mapChildrenToSizes = children => {
  children |> Js.Array.reduce((sizesArray, element) => {
    if ReactHelper.isElementTypeEqual(element, Pane.make) {
      Js.Array.concat(sizesArray, [ReactHelper.getInitialSize(element)])
    } else {
      sizesArray
    }
  }, [])
}

let recalculateSizes = (_offset, resizingIndex, sizes) => {
  let originalValue = sizes[resizingIndex]
  let newValue = originalValue->Belt.Option.map(value => value + 2)

  sizes |> Js.Array.mapi((size, i) => {
    i === resizingIndex
      ? newValue
      : switch size {
        | Some(value) => Some(value - 2)
        | None => None
        }
  })
}

@genType.as("Splinter") @react.component
export make = (~children: array<React.element>, ~split) => {
  let rootRef = React.useRef(Js.Nullable.null)
  let _rootSizeRef = React.useRef(None)

  let (sizes, setSizes) = React.useState(() => mapChildrenToSizes(children))

  let rootStyle = switch split {
  | Horizontal => ReactDOMStyle.make(~display="flex", ~flexDirection="column", ())
  | Vertical => ReactDOMStyle.make(~display="flex", ~flexDirection="row", ())
  }

  children
  |> Js.Array.reducei((finalArray, element, i) => {
    if ReactHelper.isElementTypeEqual(element, Pane.make) {
      Js.Array.concat(
        finalArray,
        [
          React.cloneElement(
            element,
            {
              size: sizes[i],
              _renderResizer: i === children->Js.Array.length - 1
                ? Some(
                    () => <Resizer split onResize={value => setSizes(recalculateSizes(value, i))} />,
                  )
                : None,
            },
          ),
        ],
      )
    } else {
      finalArray
    }
  }, [])
  |> Js.Array.mapi((element, i) => {
    <React.Fragment key={i}> {element} </React.Fragment>
  })
  |> (
    elements => {
      <div ref={ReactDOM.Ref.domRef(rootRef)} style=rootStyle> {React.array(elements)} </div>
    }
  )
}
