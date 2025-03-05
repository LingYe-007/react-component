import './index.scss';
import { CalendarProps } from './index';
import { Dayjs } from 'dayjs';
interface MonthCalendarProps extends CalendarProps {
    selectHandler?: (date: Dayjs) => void;
}
declare function MonthCalendar(props: MonthCalendarProps): import("react/jsx-runtime").JSX.Element;
export default MonthCalendar;
