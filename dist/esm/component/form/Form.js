var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import classNames from 'classnames';
import FormContext from './FormContext';
const Form = (props) => {
    const { className, style, children, onFinish, onFinishFailed, initialValues } = props, others = __rest(props, ["className", "style", "children", "onFinish", "onFinishFailed", "initialValues"]);
    const [values, setValues] = useState(initialValues || {});
    const validatorMap = useRef(new Map());
    const errors = useRef({});
    const onValueChange = (key, value) => {
        values[key] = value;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        for (let [key, callbackFunc] of validatorMap.current) {
            if (typeof callbackFunc === 'function') {
                errors.current[key] = callbackFunc();
            }
        }
        const errorList = Object.keys(errors.current).map(key => {
            return errors.current[key];
        }).filter(Boolean);
        if (errorList.length) {
            onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(errors.current);
        }
        else {
            onFinish === null || onFinish === void 0 ? void 0 : onFinish(values);
        }
    };
    const handleValidateRegister = (name, cb) => {
        validatorMap.current.set(name, cb);
    };
    const cls = classNames('ant-form', className);
    return (_jsx(FormContext.Provider, Object.assign({ value: {
            onValueChange,
            values,
            setValues: (v) => setValues(v),
            validateRegister: handleValidateRegister
        } }, { children: _jsx("form", Object.assign({}, others, { className: cls, style: style, onSubmit: handleSubmit }, { children: children })) })));
};
export default Form;
