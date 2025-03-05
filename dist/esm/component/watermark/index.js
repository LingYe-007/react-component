import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useCallback } from 'react';
import useWatermark from './useWatermark';
const Watermark = (props) => {
    const { className, style, zIndex, width, height, rotate, image, content, fontStyle, gap, offset } = props;
    const containerRef = useRef(null);
    const getContainer = useCallback(() => {
        return props.getContainer ? props.getContainer() : containerRef.current;
    }, [containerRef.current, props.getContainer]);
    const { generateWatermark } = useWatermark({
        zIndex,
        width,
        height,
        rotate,
        image,
        content,
        fontStyle,
        gap,
        offset,
        getContainer,
    });
    return props.children ? (_jsx("div", Object.assign({ className: className, style: style, ref: containerRef }, { children: props.children }))) : null;
};
export default Watermark;
