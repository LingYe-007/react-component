import { Dayjs } from 'dayjs';
import './index.scss'
import MonthCalendar from './MonthCalendar';
import cs from 'classnames';
import Header from './Header';

export interface CalendarProps {
    value: Dayjs;
    style?: React.CSSProperties;
    className?: string | string[];
    //  定制日期显示，会完全覆盖日期单元格
    dateRender?: (date: Dayjs) => React.ReactNode;
    //  定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
    dateCellRender?: (date: Dayjs) => React.ReactNode;
    locale?: string;
    onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
    const {
        value,
        style,
        className,
        dateRender,
        dateCellRender,
        locale,
    } = props;

    const classNames = cs('calendar', className);
    return (
        <div className={classNames} style={style}>
            <Header></Header>
            <MonthCalendar {...props}></MonthCalendar>
        </div>
    )
}


export default Calendar;