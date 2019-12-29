import { __assign, __extends } from "tslib";
import * as React from 'react';
import baseItem, { withItemClick, withItemFocus } from '@atlaskit/item';
import { ResultItemAfter, ResultItemAfterWrapper, ResultItemCaption, ResultItemIcon, ResultItemTextAfter, ResultItemSubText, } from './styled';
var Item = withItemClick(withItemFocus(baseItem));
var ResultItem = /** @class */ (function (_super) {
    __extends(ResultItem, _super);
    function ResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultItem.prototype.render = function () {
        var icon = this.props.icon ? (React.createElement(ResultItemIcon, { className: "ak-result-item-icon" }, this.props.icon)) : null;
        var textAfter = this.props.textAfter ? (React.createElement(ResultItemTextAfter, { className: "ak-result-item-text-after" }, this.props.textAfter)) : null;
        var after = this.props.textAfter || this.props.selectedIcon ? (React.createElement(ResultItemAfterWrapper, { className: "ak-result-item-after-wrapper" },
            React.createElement(ResultItemAfter, { className: "ak-result-item-after", shouldTakeSpace: !!this.props.textAfter },
                textAfter,
                this.props.isSelected && !this.props.isMouseSelected
                    ? this.props.selectedIcon
                    : null))) : null;
        var wrappedCaption = this.props.caption ? (React.createElement(ResultItemCaption, { className: "ak-result-item-caption" }, this.props.caption)) : null;
        var wrappedSubText = this.props.subText ? (React.createElement(ResultItemSubText, { className: "ak-result-item-subtext" }, this.props.subText)) : null;
        var interactiveWrapperProps = {
            onClick: this.props.onClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            href: this.props.href,
        };
        return (React.createElement(Item, __assign({ elemBefore: icon, elemAfter: after, description: wrappedSubText, isSelected: this.props.isSelected, isCompact: this.props.isCompact, target: this.props.target, linkComponent: this.props.linkComponent }, interactiveWrapperProps),
            this.props.text,
            wrappedCaption));
    };
    ResultItem.defaultProps = {
        isSelected: false,
        isMouseSelected: false,
    };
    return ResultItem;
}(React.PureComponent));
export default ResultItem;
//# sourceMappingURL=ResultItem.js.map