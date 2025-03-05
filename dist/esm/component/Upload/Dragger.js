import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import classNames from 'classnames';
export const Dragger = (props) => {
    const { onFile, children } = props;
    const [dragOver, setDragOver] = useState(false);
    const cs = classNames('upload-dragger', {
        'is-dragover': dragOver
    });
    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    const handleDrag = (e, over) => {
        e.preventDefault();
        setDragOver(over);
    };
    return (_jsx("div", Object.assign({ className: cs, onDragOver: e => { handleDrag(e, true); }, onDragLeave: e => { handleDrag(e, false); }, onDrop: handleDrop }, { children: children })));
};
export default Dragger;
