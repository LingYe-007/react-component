import { FC, useRef, ChangeEvent, PropsWithChildren } from 'react'
import axios from 'axios'
import './index.scss';

export interface UploadProps extends PropsWithChildren {
    action: string;
    headers?: Record<string, any>;
    name?: string;
    data?: Record<string, any>;
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    onChange?: (file: File) => void;
}

export const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        name,
        headers,
        data,
        withCredentials,
        accept,
        multiple,
        children,
        onProgress,
        onSuccess,
        onError,
        onChange,
        beforeUpload
    } = props

    const fileInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (fileInput.current) {
            fileInput.current.click()
        }
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files) {
            return
        }
        uploadFiles(files)
        if (fileInput.current) {
            fileInput.current.value = ''
        }
    }

    const uploadFiles = (files: FileList) => {
        let postFiles = Array.from(files)
        postFiles.forEach(file => {
            if (!beforeUpload) {
                post(file)
            } else {
                const result = beforeUpload(file)
                if (result && result instanceof Promise) {
                    result.then(processedFile => {
                        post(processedFile)
                    })
                } else if (result !== false) {
                    post(file)
                }
            }
        })
    }

    const post = (file: File) => {
        const formData = new FormData()

        formData.append(name || 'file', file);
        if (data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key])
            })
        }

        axios.post(action, formData, {
            headers: {
                ...headers,
                'Content-Type': 'multipart/form-data'
            },
            withCredentials
        })
    }

    return (
        <div className="upload-component">
            <div
                className="upload-input"
                onClick={handleClick}
            >
                {children}
                <input
                    className="upload-file-input"
                    type="file"
                    ref={fileInput}
                    onChange={handleFileChange}
                    accept={accept}
                    multiple={multiple}
                />
            </div>
        </div>
    )
}

export default Upload;