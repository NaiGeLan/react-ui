import React from 'react';
import { MyButton } from "../..";
var App = function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MyButton, {
    type: "primary",
    size: "xs"
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(MyButton, {
    type: "secondary",
    size: "sm"
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(MyButton, {
    type: "warn",
    size: "m"
  }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(MyButton, {
    type: "success",
    size: "l"
  }, "\u6309\u94AE"));
};
export default App;
// export default function BasicButtonDemo() {
//   return (
//     <div>
//       <MyButton type="primary" size="xs">按钮</MyButton>
//       <MyButton type="secondary" size="sm">按钮</MyButton>
//       <MyButton type="warn" size="m">按钮</MyButton>
//       <MyButton type="success" size="l">按钮</MyButton>
//     </div>
//   )
// }