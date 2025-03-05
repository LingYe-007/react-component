import { WatermarkProps } from './index';
export type WatermarkOptions = Omit<WatermarkProps, 'className' | 'style' | 'children'>;
export declare function isNumber(obj: any): obj is number;
export default function useWatermark(params: WatermarkOptions): {
    generateWatermark: (newOptions: Partial<WatermarkOptions>) => void;
    destroy: () => void;
};
