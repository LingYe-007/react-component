/// <reference types="react" />
import { Dayjs } from 'dayjs';
import './index.scss';
export interface CalendarProps {
    value: Dayjs;
    style?: React.CSSProperties;
    className?: string | string[];
    dateRender?: (date: Dayjs) => React.ReactNode;
    dateCellRender?: (date: Dayjs) => React.ReactNode;
    locale?: string;
    onChange?: (date: Date) => void;
}
declare function Calendar(props: CalendarProps): import("react/jsx-runtime").JSX.Element;
export default Calendar;
