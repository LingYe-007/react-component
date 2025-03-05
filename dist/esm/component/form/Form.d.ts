import React, { CSSProperties, ReactNode } from 'react';
export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    className?: string;
    style?: CSSProperties;
    onFinish?: (values: Record<string, any>) => void;
    onFinishFailed?: (errors: Record<string, any>) => void;
    initialValues?: Record<string, any>;
    children?: ReactNode;
}
declare const Form: (props: FormProps) => import("react/jsx-runtime").JSX.Element;
export default Form;
