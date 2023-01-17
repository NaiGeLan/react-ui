import React from 'react';
import { MyButton } from "../..";
export default function BasicButtonDemo() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MyButton, {
    type: "primary"
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(MyButton, {
    type: "secondary"
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(MyButton, {
    type: "warn"
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(MyButton, {
    type: "success"
  }, "\u6309\u94AE"));
}