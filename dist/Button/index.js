import React from 'react';
import { ButtonStyle } from "./style";
var MyButton = function MyButton(props) {
  var children = props.children;
  console.log(props);
  return /*#__PURE__*/React.createElement(ButtonStyle, {
    props: props
  }, children);
};
export default MyButton;