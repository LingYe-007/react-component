import React from 'react';
import './index.sass';
type BaseProps = {
    className?: string;
    style?: React.CSSProperties;
    size?: string | string[];
    spin?: boolean;
};
export type IconProps = BaseProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseProps>;
export declare const getSize: (size: IconProps['size']) => string[];
export declare const Icon: React.ForwardRefExoticComponent<BaseProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseProps> & {
    children?: React.ReactNode;
} & React.RefAttributes<SVGSVGElement>>;
export {};
