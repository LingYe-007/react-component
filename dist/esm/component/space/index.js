var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import './index.scss';
const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
};
function getNumberSize(size) {
    return typeof size === 'string' ? spaceSize[size] : size || 0;
}
const Space = props => {
    const { className, style, children, size = 'small', direction = 'horizontal', align, split, wrap = false } = props, otherProps = __rest(props, ["className", "style", "children", "size", "direction", "align", "split", "wrap"]);
    const childNodes = React.Children.toArray(children);
    const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;
    const cn = classNames('space', `space-${direction}`, {
        [`space-align-${mergedAlign}`]: mergedAlign,
    }, className);
    const nodes = childNodes.map((child, i) => {
        const key = child && child.key || `space-item-${i}`;
        return _jsx("div", Object.assign({ className: 'space-item' }, { children: child }), key);
    });
    const otherStyles = {};
    const [horizontalSize, verticalSize] = React.useMemo(() => (Array.isArray(size) ? size : [size, size]).map(item => getNumberSize(item)), [size]);
    otherStyles.columnGap = horizontalSize;
    otherStyles.rowGap = verticalSize;
    if (wrap) {
        otherStyles.flexWrap = 'wrap';
    }
    return _jsx("div", Object.assign({ className: cn, style: Object.assign(Object.assign({}, otherStyles), style) }, otherProps, { children: nodes }));
};
export default Space;
