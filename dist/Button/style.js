var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var defaultConfig;
(function (defaultConfig) {
  defaultConfig["ButtonColor"] = "#4e67f2";
  defaultConfig["TextColor"] = "#fff";
  defaultConfig["fontSize"] = "1em";
  defaultConfig["paddingL"] = "1.5em";
  defaultConfig["paddingH"] = "0.5em";
})(defaultConfig || (defaultConfig = {}));
var colorMap = new Map([['primary', '#4e67f2'], ['secondary', '#9748da'], ['success', '#50c969'], ['warn', '#e7ab35']]);
var sizeMap = new Map([['xs', {
  paddingL: '1em',
  paddingH: '0.2em',
  fontSize: '0.7em'
}], ['sm', {
  paddingL: '1.1em',
  paddingH: '0.3em',
  fontSize: '0.8em'
}], ['m', {
  paddingL: '1.3em',
  paddingH: '0.4em',
  fontSize: '0.9em'
}], ['l', {
  paddingL: '1.4em',
  paddingH: '0.5em',
  fontSize: '1em'
}]]);
var getColor = function getColor(color) {
  var propsColor = colorMap.get(color);
  if (propsColor !== undefined) {
    return propsColor;
  }
  return color;
};
var getSize = function getSize(size, type) {
  var isEnum = sizeMap.get(size);
  if (isEnum === undefined) return;
  return isEnum[type];
};
export var ButtonStyle = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  font-size: ", ";\n  margin: 1em 2em;\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  border-radius: 0.5em;\n"])), function (_ref) {
  var props = _ref.props;
  return props.type ? getColor(props.type) : defaultConfig.ButtonColor;
}, function (_ref2) {
  var props = _ref2.props;
  return props.color ? props.color : defaultConfig.TextColor;
}, function (_ref3) {
  var props = _ref3.props;
  return props.size ? getSize(props.size, 'fontSize') : defaultConfig.fontSize;
}, function (_ref4) {
  var props = _ref4.props;
  return props.size ? getSize(props.size, 'paddingL') : defaultConfig.paddingL;
}, function (_ref5) {
  var props = _ref5.props;
  return props.size ? getSize(props.size, 'paddingL') : defaultConfig.paddingL;
}, function (_ref6) {
  var props = _ref6.props;
  return props.size ? getSize(props.size, 'paddingH') : defaultConfig.paddingH;
}, function (_ref7) {
  var props = _ref7.props;
  return props.size ? getSize(props.size, 'paddingH') : defaultConfig.paddingH;
});