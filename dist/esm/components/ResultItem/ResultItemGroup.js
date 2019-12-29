import { __extends } from "tslib";
import * as React from 'react';
import { ItemGroup } from '@atlaskit/item';
import { ResultItemGroupTitle, ResultItemGroupHeader } from './styled';
var ResultItemGroup = /** @class */ (function (_super) {
    __extends(ResultItemGroup, _super);
    function ResultItemGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultItemGroup.prototype.render = function () {
        var _a = this.props, title = _a.title, children = _a.children;
        var wrappedTitle = (React.createElement(ResultItemGroupHeader, { className: "ak-result-item-group-header" },
            React.createElement(ResultItemGroupTitle, { className: "ak-result-item-group-title" }, title)));
        return (React.createElement(ItemGroup, { title: wrappedTitle, className: "ak-result-item-group" }, children));
    };
    return ResultItemGroup;
}(React.Component));
export default ResultItemGroup;
//# sourceMappingURL=ResultItemGroup.js.map