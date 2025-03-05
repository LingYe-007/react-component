import { FC, PropsWithChildren } from 'react';
interface DraggerProps extends PropsWithChildren {
    onFile: (files: FileList) => void;
}
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
