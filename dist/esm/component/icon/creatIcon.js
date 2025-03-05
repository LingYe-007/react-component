import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Icon } from '.';
export function createIcon(options) {
    const { content, iconProps = {}, viewBox = '0 0 1024 1024' } = options;
    return forwardRef((props, ref) => {
        return _jsx(Icon, Object.assign({ ref: ref, viewBox: viewBox }, iconProps, props, { children: content }));
    });
}
