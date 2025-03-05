import { FC, PropsWithChildren } from 'react';
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
export declare const Upload: FC<UploadProps>;
export default Upload;
