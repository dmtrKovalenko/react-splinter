@react.component
@genType.as("Spread")
let make = (~props, ~children) => React.cloneElement(children, props);