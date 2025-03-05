import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useStore from "./useStore";
export const MessageProvider = (props) => {
    const { messages, add, update, remove, clearAll } = useStore('top');
    useEffect(() => {
        setInterval(() => {
            add({
                content: Math.random().toString().slice(2, 8)
            });
        }, 2000);
    }, []);
    const positions = Object.keys(messages);
    return _jsx("div", { children: positions.map(direction => {
            return _jsx(TransitionGroup, Object.assign({ className: `message-wrapper-${direction}` }, { children: messages.top.map(item => {
                    return _jsx(CSSTransition, Object.assign({ timeout: 1000, classNames: 'message' }, { children: _jsx("div", Object.assign({ style: { width: 100, lineHeight: '30px', border: '1px solid #000', margin: '20px' } }, { children: item.content })) }), item.id);
                }) }), direction);
        }) });
};
