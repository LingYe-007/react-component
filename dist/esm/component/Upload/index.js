import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import axios from 'axios';
import './index.scss';
export const Upload = (props) => {
    const { action, name, headers, data, withCredentials, accept, multiple, children, onProgress, onSuccess, onError, onChange, beforeUpload } = props;
    const fileInput = useRef(null);
    const handleClick = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    const handleFileChange = (e) => {
        const files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    const uploadFiles = (files) => {
        let postFiles = Array.from(files);
        postFiles.forEach(file => {
            if (!beforeUpload) {
                post(file);
            }
            else {
                const result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(processedFile => {
                        post(processedFile);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    const post = (file) => {
        const formData = new FormData();
        formData.append(name || 'file', file);
        if (data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: Object.assign(Object.assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials
        });
    };
    return (_jsx("div", Object.assign({ className: "upload-component" }, { children: _jsxs("div", Object.assign({ className: "upload-input", onClick: handleClick }, { children: [children, _jsx("input", { className: "upload-file-input", type: "file", ref: fileInput, onChange: handleFileChange, accept: accept, multiple: multiple })] })) })));
};
export default Upload;
