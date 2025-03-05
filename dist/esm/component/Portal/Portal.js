import { forwardRef, useEffect, useMemo, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
const Portal = forwardRef((props, ref) => {
    const { attach = document.body, children } = props;
    const container = useMemo(() => {
        const el = document.createElement('div');
        el.className = `portal-wrapper`;
        return el;
    }, []);
    useEffect(() => {
        var _a;
        const parentElement = getAttach(attach);
        (_a = parentElement === null || parentElement === void 0 ? void 0 : parentElement.appendChild) === null || _a === void 0 ? void 0 : _a.call(parentElement, container);
        return () => {
            var _a;
            (_a = parentElement === null || parentElement === void 0 ? void 0 : parentElement.removeChild) === null || _a === void 0 ? void 0 : _a.call(parentElement, container);
        };
    }, [container, attach]);
    useImperativeHandle(ref, () => container);
    return createPortal(children, container);
});
export default Portal;
export function getAttach(attach) {
    if (typeof attach === 'string') {
        return document.querySelector(attach);
    }
    if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
        return attach;
    }
    return document.body;
}
