import { CSSProperties, FC, ReactNode } from "react";
export type Position = 'top' | 'bottom';
export interface MessageProps {
    style?: CSSProperties;
    className?: string | string[];
    content: ReactNode;
    duration?: number;
    id?: number;
    position?: Position;
}
export declare const MessageProvider: FC<{}>;
