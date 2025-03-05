var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState, useRef } from 'react';
import { merge } from 'lodash-es';
export function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]' && obj === obj;
}
const toNumber = (value, defaultValue) => {
    if (!value) {
        return defaultValue;
    }
    if (isNumber(value)) {
        return value;
    }
    const numberVal = parseFloat(value);
    return isNumber(numberVal) ? numberVal : defaultValue;
};
const defaultOptions = {
    rotate: -20,
    zIndex: 1,
    width: 100,
    gap: [100, 100],
    fontStyle: {
        fontSize: '16px',
        color: 'rgba(0, 0, 0, 0.15)',
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
    },
    getContainer: () => document.body,
};
const getMergedOptions = (o) => {
    var _a, _b, _c, _d, _e, _f;
    const options = o || {};
    const mergedOptions = Object.assign(Object.assign({}, options), { rotate: options.rotate || defaultOptions.rotate, zIndex: options.zIndex || defaultOptions.zIndex, fontStyle: Object.assign(Object.assign({}, defaultOptions.fontStyle), options.fontStyle), width: toNumber(options.width, options.image ? defaultOptions.width : undefined), height: toNumber(options.height, undefined), getContainer: options.getContainer, gap: [
            toNumber((_a = options.gap) === null || _a === void 0 ? void 0 : _a[0], defaultOptions.gap[0]),
            toNumber(((_b = options.gap) === null || _b === void 0 ? void 0 : _b[1]) || ((_c = options.gap) === null || _c === void 0 ? void 0 : _c[0]), defaultOptions.gap[1]),
        ] });
    const mergedOffsetX = toNumber((_d = mergedOptions.offset) === null || _d === void 0 ? void 0 : _d[0], 0);
    const mergedOffsetY = toNumber(((_e = mergedOptions.offset) === null || _e === void 0 ? void 0 : _e[1]) || ((_f = mergedOptions.offset) === null || _f === void 0 ? void 0 : _f[0]), 0);
    mergedOptions.offset = [mergedOffsetX, mergedOffsetY];
    return mergedOptions;
};
const getCanvasData = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { rotate, image, content, fontStyle, gap } = options;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ratio = window.devicePixelRatio;
    const configCanvas = (size) => {
        const canvasWidth = gap[0] + size.width;
        const canvasHeight = gap[1] + size.height;
        canvas.setAttribute('width', `${canvasWidth * ratio}px`);
        canvas.setAttribute('height', `${canvasHeight * ratio}px`);
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;
        ctx.translate((canvasWidth * ratio) / 2, (canvasHeight * ratio) / 2);
        ctx.scale(ratio, ratio);
        const RotateAngle = (rotate * Math.PI) / 180;
        ctx.rotate(RotateAngle);
    };
    const drawText = () => {
    };
    function drawImage() {
    }
    return image ? drawImage() : drawText();
});
export default function useWatermark(params) {
    const [options, setOptions] = useState(params || {});
    const mergedOptions = getMergedOptions(options);
    const watermarkDiv = useRef(null);
    const container = mergedOptions.getContainer();
    const { zIndex, gap } = mergedOptions;
    function drawWatermark() {
        if (!container) {
            return;
        }
        getCanvasData(mergedOptions).then(({ base64Url, width, height }) => {
            var _a;
            const wmStyle = `
            width:100%;
            height:100%;
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            pointer-events: none;
            z-index:${zIndex};
            background-position: 0 0;
            background-size:${gap[0] + width}px ${gap[1] + height}px;
            background-repeat: repeat;
            background-image:url(${base64Url})`;
            if (!watermarkDiv.current) {
                const div = document.createElement('div');
                watermarkDiv.current = div;
                container.append(div);
                container.style.position = 'relative';
            }
            (_a = watermarkDiv.current) === null || _a === void 0 ? void 0 : _a.setAttribute('style', wmStyle.trim());
        });
    }
    useEffect(() => {
        drawWatermark();
    }, [options]);
    return {
        //partial都变成了可选参数。
        generateWatermark: (newOptions) => {
            setOptions(merge({}, options, newOptions));
        },
        destroy: () => {
        },
    };
}
