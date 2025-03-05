import { ReactNode, CSSProperties, ReactElement } from 'react';
export interface ItemProps {
    className?: string;
    style?: CSSProperties;
    label?: ReactNode;
    name?: string;
    valuePropName?: string;
    rules?: Array<Record<string, any>>;
    children?: ReactElement;
}
declare const Item: (props: ItemProps) => import("react/jsx-runtime").JSX.Element | undefined;
export default Item;
