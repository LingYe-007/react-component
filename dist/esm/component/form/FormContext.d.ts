/// <reference types="react" />
export interface FormContextProps {
    values?: Record<string, any>;
    setValues?: (values: Record<string, any>) => void;
    onValueChange?: (key: string, value: any) => void;
    validateRegister?: (name: string, cb: Function) => void;
}
declare const _default: import("react").Context<FormContextProps>;
export default _default;
