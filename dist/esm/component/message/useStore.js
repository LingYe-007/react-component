import { useState } from 'react';
const initialState = {
    top: [],
    bottom: []
};
let count = 1;
export function getId(message) {
    if (message.id) {
        return message.id;
    }
    count += 1;
    return count;
}
export function findMessage(messageList, id) {
    const position = getMessagePosition(messageList, id);
    const index = position ? messageList[position].findIndex((message) => message.id === id) : -1;
    return {
        position,
        index,
    };
}
export function getMessagePosition(message, id) {
    for (const [position, list] of Object.entries(message)) {
        if (list.find(item => item.id === id)) {
            return position;
        }
    }
}
function useStore(defaultPosition = 'top') {
    const [messages, setMessages] = useState(initialState);
    return {
        messages,
        add: (messages) => {
            const id = getId(messages);
            setMessages((prevState) => {
                var _a, _b;
                if (messages.id) {
                    const position = getMessagePosition(prevState, id);
                    if (position)
                        return prevState;
                }
                const position = messages.position || defaultPosition;
                const isTop = position.includes('top');
                const messagesEnd = isTop
                    ? [Object.assign(Object.assign({}, messages), { id }), ...((_a = prevState[position]) !== null && _a !== void 0 ? _a : [])]
                    : [...((_b = prevState[position]) !== null && _b !== void 0 ? _b : []), Object.assign(Object.assign({}, messages), { id })];
                return Object.assign(Object.assign({}, prevState), { [position]: messagesEnd });
            });
            return id;
        },
        update: (id, message) => {
            if (!id)
                return;
            setMessages((preState) => {
                const nextState = Object.assign({}, preState);
                const { position, index } = findMessage(nextState, id);
                if (position && index !== -1) {
                    nextState[position][index] = Object.assign(Object.assign({}, nextState[position][index]), message);
                }
                return nextState;
            });
        },
        remove: (id) => {
            setMessages((prevState) => {
                const position = getMessagePosition(prevState, id);
                if (!position)
                    return prevState;
                return Object.assign(Object.assign({}, prevState), { [position]: prevState[position].filter((notice) => notice.id !== id) });
            });
        },
        clearAll: () => {
            setMessages(Object.assign({}, initialState));
        }
    };
}
export default useStore;
