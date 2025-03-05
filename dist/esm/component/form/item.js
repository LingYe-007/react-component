import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import Schema from 'async-validator';
import FormContext from './FormContext';
const getValueFromEvent = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
        return target.checked;
    }
    else if (target.type === 'radio') {
        return target.value;
    }
    return target.value;
};
const Item = (props) => {
    const { className, label, children, style, name, valuePropName, rules, } = props;
    if (!name) {
        return children;
    }
    const [value, setValue] = useState();
    const [error, setError] = useState('');
    const { onValueChange, values, validateRegister } = useContext(FormContext);
    useEffect(() => {
        if (value !== (values === null || values === void 0 ? void 0 : values[name])) {
            setValue(values === null || values === void 0 ? void 0 : values[name]);
        }
    }, [values, values === null || values === void 0 ? void 0 : values[name]]);
    const handleValidate = (value) => {
        let errorMsg = null;
        if (Array.isArray(rules) && rules.length) {
            const validator = new Schema({
                [name]: rules.map(rule => {
                    return Object.assign({ type: 'string' }, rule);
                })
            });
            validator.validate({ [name]: value }, (errors) => {
                if (errors) {
                    if (errors === null || errors === void 0 ? void 0 : errors.length) {
                        setError(errors[0].message);
                        errorMsg = errors[0].message;
                    }
                }
                else {
                    setError('');
                    errorMsg = null;
                }
            });
        }
        return errorMsg;
    };
    useEffect(() => {
        validateRegister === null || validateRegister === void 0 ? void 0 : validateRegister(name, () => handleValidate(value));
    }, [value]);
    const propsName = {};
    if (valuePropName) {
        propsName[valuePropName] = value;
    }
    else {
        propsName.value = value;
    }
    const childEle = React.Children.toArray(children).length > 1 ? children : React.cloneElement(children, Object.assign(Object.assign({}, propsName), { onChange: (e) => {
            const value = getValueFromEvent(e);
            setValue(value);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(name, value);
            handleValidate(value);
        } }));
    const cls = classNames('ant-form-item', className);
    return (_jsxs("div", Object.assign({ className: cls, style: style }, { children: [_jsx("div", { children: label && _jsx("label", { children: label }) }), _jsxs("div", { children: [childEle, error && _jsx("div", Object.assign({ style: { color: 'red' } }, { children: error }))] })] })));
};
export default Item;
