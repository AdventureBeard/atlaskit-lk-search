import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { colors, gridSize } from '@atlaskit/theme';
var inputRightPadding = gridSize() * 2;
export var SearchBox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  z-index: 1; /* required to keep the search box on top of icons in results when sticky */\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  height: 36px;\n  z-index: 10;\n"], ["\n  position: sticky;\n  top: 0;\n  z-index: 1; /* required to keep the search box on top of icons in results when sticky */\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  height: 36px;\n  z-index: 10;\n"])), colors.N0, colors.N500);
export var SearchFieldBaseOuter = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  margin-right: auto;\n  padding-bottom: 2px;\n  border-bottom: 2px solid ", ";\n"], ["\n  display: flex;\n  flex: 1;\n  margin-right: auto;\n  padding-bottom: 2px;\n  border-bottom: 2px solid ", ";\n"])), colors.B200);
export var SearchFieldBaseInner = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  align-items: center;\n  padding-right: ", "px; /* pad search text from FieldBase's isLoading spinner */\n  display: flex;\n  flex-grow: 1;\n"], ["\n  position: relative;\n  align-items: center;\n  padding-right: ", "px; /* pad search text from FieldBase's isLoading spinner */\n  display: flex;\n  flex-grow: 1;\n"])), inputRightPadding);
export var SearchInner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-right: ", "px;\n"], ["\n  padding-right: ", "px;\n"])), gridSize() * 3);
export var getPlaceholderStyle = function (style) { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &::-webkit-input-placeholder {\n    ", ";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    ", " opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ", ";\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    ", " opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ", ";\n  }\n"], ["\n  &::-webkit-input-placeholder {\n    ", ";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    ", " opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ", ";\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    ", " opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ", ";\n  }\n"])), style, style, style, style, style); };
export var getPlaceholderColor = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), colors.placeholderText);
export var SearchInput = styled.input(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: transparent;\n  border: 0;\n  color: ", ";\n  flex-grow: 1;\n  font-size: 1.4em;\n  outline: 0;\n  // Safari adds 2px margin-left\n  margin-left: 0;\n  ", ";\n"], ["\n  background-color: transparent;\n  border: 0;\n  color: ", ";\n  flex-grow: 1;\n  font-size: 1.4em;\n  outline: 0;\n  // Safari adds 2px margin-left\n  margin-left: 0;\n  ", ";\n"])), colors.N500, getPlaceholderStyle(getPlaceholderColor));
export var SearchInputTypeAhead = styled(SearchInput)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  position: absolute;\n  width: calc(100% - ", "px);\n  z-index: -1;\n"], ["\n  color: ", ";\n  position: absolute;\n  width: calc(100% - ", "px);\n  z-index: -1;\n"])), colors.N50, inputRightPadding);
export var SearchInputControlsContainer = styled.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding-left: ", "px;\n"], ["\n  padding-left: ", "px;\n"])), gridSize() * 3);
SearchInputControlsContainer.displayName = 'SearchInputControlsContainer'; // required for testing
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styled.js.map