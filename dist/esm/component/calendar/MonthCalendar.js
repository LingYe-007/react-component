import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.scss';
import cs from 'classnames';
import { Value } from 'sass';
function getAllDays(date) {
    const startDate = date.startOf('month');
    const day = startDate.day();
    const daysInfo = new Array(6 * 7);
    for (let i = 0; i < day; i++) {
        daysInfo[i] = {
            date: startDate.subtract(day - i, 'day'),
            currentMonth: false
        };
    }
    for (let i = day; i < daysInfo.length; i++) {
        let calcDate = startDate.add(i - day, 'day');
        daysInfo[i] = {
            date: startDate.add(i - day, 'day'),
            currentMonth: calcDate.month() === date.month()
        };
    }
    return daysInfo;
}
function renderDays(days, dateRender, dateCellRender, value) {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 7; j++) {
            const item = days[i * 7 + j];
            row[j] = _jsx("div", Object.assign({ className: "calendar-month-body-cell " + (item.currentMonth ? 'calendar-month-body-cell-current' : '') }, { children: dateRender ? dateRender(item.date) : (_jsxs("div", Object.assign({ className: "calendar-month-body-cell-date" }, { children: [_jsx("div", Object.assign({ className: cs("calendar-month-body-cell-date-value", value.format('YYYY-MM-DD') === item.date.format('YYYY-MM-DD')
                                ? "calendar-month-body-cell-date-selected"
                                : "") }, { children: item.date.date() })), _jsx("div", Object.assign({ className: "calendar-month-body-cell-date-content" }, { children: dateCellRender === null || dateCellRender === void 0 ? void 0 : dateCellRender(item.date) }))] }))) }));
        }
        rows.push(row);
    }
    return rows.map(row => _jsx("div", Object.assign({ className: "calendar-month-body-row" }, { children: row })));
}
function MonthCalendar(props) {
    const { dateRender, dateCellRender, selectHandler, } = props;
    const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const allDays = getAllDays(props.value);
    return _jsxs("div", Object.assign({ className: "calendar-month" }, { children: [_jsx("div", Object.assign({ className: "calendar-month-week-list" }, { children: weekList.map((week) => (_jsx("div", Object.assign({ className: "calendar-month-week-list-item" }, { children: week }), week))) })), _jsx("div", Object.assign({ className: "calendar-month-body" }, { children: renderDays(allDays, dateRender, dateCellRender, Value) }))] }));
}
export default MonthCalendar;
