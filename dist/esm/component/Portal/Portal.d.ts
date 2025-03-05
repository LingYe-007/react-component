/// <reference types="react" />
export interface PortalProps {
    attach?: HTMLElement | string;
    children: React.ReactNode;
}
declare const Portal: import("react").ForwardRefExoticComponent<PortalProps & import("react").RefAttributes<unknown>>;
export default Portal;
export declare function getAttach(attach: PortalProps['attach']): Element | null;
