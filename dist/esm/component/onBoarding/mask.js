import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getMaskStyle } from './getMaskStyle';
export const Mask = (props) => {
    const { element, renderMaskContent, container } = props;
    const [style, setStyle] = useState({});
    useEffect(() => {
        if (!element) {
            return;
        }
        element.scrollIntoView({
            block: 'center',
            inline: 'center'
        });
        const style = getMaskStyle(element, container || document.documentElement);
        setStyle(style);
    }, [element, container]);
    const getContent = () => {
        if (!renderMaskContent) {
            return null;
        }
        return renderMaskContent(_jsx("div", { className: 'mask-content', style: { width: '100%', height: '100%' } }));
    };
    return (_jsx("div", Object.assign({ style: style, className: 'mask' }, { children: getContent() })));
};
