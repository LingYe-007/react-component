import React, { PropsWithChildren, forwardRef } from 'react';
import './index.sass';

type BaseProps = {
    className?: string;
    style?: React.CSSProperties;
    size?: string | string[];
    spin?: boolean;
};

export type IconProps = BaseProps & Omit<React.SVGAttributes<SVGElement>,keyof BaseProps>;

export const getSize = (size: IconProps['size']) => {
    if (Array.isArray(size) && size.length === 2) {
        return size as string[];
    }

    const width = (size as string) || '1em';
    const height = (size as string) || '1em';

    return [width, height];
};


export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
    
    const { 
        style,
        className, 
        spin, 
        size = '1em',
        children,
        ...rest 
    } = props;

    const [width, height] = getSize(size);

    return (
        <svg ref={ref} width={width} height={height} style={style} fill="currentColor" {...rest}>
            {children}
        </svg>
    );
});