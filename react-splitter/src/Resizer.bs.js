// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var sharedStyle = {
  backgroundColor: "black",
  backgroundClip: "padding-box",
  boxSizing: "border-box"
};

function Resizer(Props) {
  var onResize = Props.onResize;
  var split = Props.split;
  var match = React.useState(function () {
        return false;
      });
  var setIsMoueDown = match[1];
  var isMouseDown = match[0];
  var handleMouseMove = function (e) {
    if (!isMouseDown) {
      return ;
    }
    var nativeEvent = e.nativeEvent;
    return Curry._1(onResize, split ? nativeEvent.offsetY : nativeEvent.offsetX);
  };
  var style = split ? ({
        borderRight: "5px solid rgba(255,255,255,0)",
        borderLeft: "5px solid rgba(255,255,255,0)",
        cursor: "col-resize",
        margin: "0 -5px",
        width: "11px"
      }) : ({
        borderTop: "5px solid rgba(255,255,255,0)",
        borderBottom: "5px solid rgba(255,255,255,0)",
        cursor: "row-resize",
        height: "11px",
        margin: "-5px 0px"
      });
  return React.createElement("div", {
              style: Object.assign({}, style, sharedStyle),
              onMouseDown: (function (param) {
                  return Curry._1(setIsMoueDown, (function (param) {
                                return true;
                              }));
                }),
              onMouseMove: handleMouseMove,
              onMouseUp: (function (param) {
                  return Curry._1(setIsMoueDown, (function (param) {
                                return false;
                              }));
                })
            });
}

var make = Resizer;

export {
  sharedStyle ,
  make ,
  
}
/* react Not a pure module */
