@genType.as("Pane") @react.component
export make = (~children, ~size=?, ~initialSize=?, ~_renderResizer=?, ()) => {
  let flexBasis = switch size {
  | None => "100%"
  | Some(size) => `${size}%`
  }

  <>
    <div style={ReactDOMStyle.make(~flexBasis, ())}> children </div>
    {switch _renderResizer {
    | Some(renderResizerFn) => renderResizerFn()
    | None => React.null
    }}
  </>
}
