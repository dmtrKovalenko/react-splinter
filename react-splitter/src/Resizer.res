type nativeEvent = {offsetX: float, offsetY: float}

let sharedStyle = ReactDOMRe.Style.make(
  ~backgroundColor="black",
  ~boxSizing="border-box",
  ~backgroundClip="padding-box",
  (),
)

type splitVariant = Horizontal | Vertical

@react.component
let make = (~onResize, ~split) => {
  let (isMouseDown, setIsMoueDown) = React.useState(() => false)

  let handleMouseMove = (e: ReactEvent.synthetic<ReactEvent.Mouse.tag>) => {
    if isMouseDown {
      let nativeEvent = ReactEvent.Synthetic.nativeEvent(e)

      onResize(
        switch split {
        | Vertical => nativeEvent["offsetY"]
        | Horizontal => nativeEvent["offsetX"]
        },
      )
    }
  }

  let style = switch split {
  | Vertical =>
    ReactDOMStyle.make(
      ~width="11px",
      ~margin="0 -5px",
      ~borderLeft="5px solid rgba(255,255,255,0)",
      ~borderRight="5px solid rgba(255,255,255,0)",
      ~cursor="col-resize",
      (),
    )
  | Horizontal =>
    ReactDOMStyle.make(
      ~height="11px",
      ~margin="-5px 0px",
      ~borderTop="5px solid rgba(255,255,255,0)",
      ~borderBottom="5px solid rgba(255,255,255,0)",
      ~cursor="row-resize",
      (),
    )
  }

  <div 
    onMouseDown={_ => setIsMoueDown(_ => true)}
    onMouseUp={_ => setIsMoueDown(_ => false)}
    onMouseMove=handleMouseMove
    style={ReactDOM.Style.combine(style, sharedStyle)}
  />
}
