import React from 'react';
interface MaskProps {
    element: HTMLElement;
    container?: HTMLElement;
    renderMaskContent?: (wrapper: React.ReactNode) => React.ReactNode;
}
export declare const Mask: React.FC<MaskProps>;
export {};
