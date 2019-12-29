"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var atlaskit_lk_item_1 = tslib_1.__importStar(require("@adventurebeard/atlaskit-lk-item"));
var styled_1 = require("./styled");
var Item = atlaskit_lk_item_1.withItemClick(atlaskit_lk_item_1.withItemFocus(atlaskit_lk_item_1.default));
var ResultItem = /** @class */ (function (_super) {
    tslib_1.__extends(ResultItem, _super);
    function ResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultItem.prototype.render = function () {
        var icon = this.props.icon ? (React.createElement(styled_1.ResultItemIcon, { className: "ak-result-item-icon" }, this.props.icon)) : null;
        var textAfter = this.props.textAfter ? (React.createElement(styled_1.ResultItemTextAfter, { className: "ak-result-item-text-after" }, this.props.textAfter)) : null;
        var after = this.props.textAfter || this.props.selectedIcon ? (React.createElement(styled_1.ResultItemAfterWrapper, { className: "ak-result-item-after-wrapper" },
            React.createElement(styled_1.ResultItemAfter, { className: "ak-result-item-after", shouldTakeSpace: !!this.props.textAfter },
                textAfter,
                this.props.isSelected && !this.props.isMouseSelected
                    ? this.props.selectedIcon
                    : null))) : null;
        var wrappedCaption = this.props.caption ? (React.createElement(styled_1.ResultItemCaption, { className: "ak-result-item-caption" }, this.props.caption)) : null;
        var wrappedSubText = this.props.subText ? (React.createElement(styled_1.ResultItemSubText, { className: "ak-result-item-subtext" }, this.props.subText)) : null;
        var interactiveWrapperProps = {
            onClick: this.props.onClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            href: this.props.href,
        };
        return (React.createElement(Item, tslib_1.__assign({ elemBefore: icon, elemAfter: after, description: wrappedSubText, isSelected: this.props.isSelected, isCompact: this.props.isCompact, target: this.props.target, linkComponent: this.props.linkComponent }, interactiveWrapperProps),
            this.props.text,
            wrappedCaption));
    };
    ResultItem.defaultProps = {
        isSelected: false,
        isMouseSelected: false,
    };
    return ResultItem;
}(React.PureComponent));
exports.default = ResultItem;
//# sourceMappingURL=ResultItem.js.map