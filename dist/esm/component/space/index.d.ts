import React from 'react';
import './index.scss';
export type SizeType = 'small' | 'middle' | 'large' | number | undefined;
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    size?: SizeType | [SizeType, SizeType];
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
    split?: React.ReactNode;
    wrap?: boolean;
}
declare const Space: React.FC<SpaceProps>;
export default Space;
