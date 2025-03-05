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
import { forwardRef } from 'react';
import './index.sass';
export const getSize = (size) => {
    if (Array.isArray(size) && size.length === 2) {
        return size;
    }
    const width = size || '1em';
    const height = size || '1em';
    return [width, height];
};
export const Icon = forwardRef((props, ref) => {
    const { style, className, spin, size = '1em', children } = props, rest = __rest(props, ["style", "className", "spin", "size", "children"]);
    const [width, height] = getSize(size);
    return (_jsx("svg", Object.assign({ ref: ref, width: width, height: height, style: style, fill: "currentColor" }, rest, { children: children })));
});
