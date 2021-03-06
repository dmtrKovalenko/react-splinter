// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function Pane(Props) {
  var children = Props.children;
  var size = Props.size;
  var _renderResizer = Props._renderResizer;
  var flexBasis = size !== undefined ? size + "%" : "100%";
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  style: {
                    flexBasis: flexBasis
                  }
                }, children), _renderResizer !== undefined ? Curry._1(_renderResizer, undefined) : null);
}

var make = Pane;

export {
  make ,
  
}
/* react Not a pure module */
