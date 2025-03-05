import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.scss';
import MonthCalendar from './MonthCalendar';
import cs from 'classnames';
import Header from './Header';
function Calendar(props) {
    const { value, style, className, dateRender, dateCellRender, locale, } = props;
    const classNames = cs('calendar', className);
    return (_jsxs("div", Object.assign({ className: classNames, style: style }, { children: [_jsx(Header, {}), _jsx(MonthCalendar, Object.assign({}, props))] })));
}
export default Calendar;
