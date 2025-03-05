import { useState } from 'react';
import { MessageProps, Position } from '.';
import { get, update } from 'lodash-es';

type MessageList = {
    top: MessageProps[];
    bottom: MessageProps[];
}

const initialState = {
    top: [],
    bottom: []
}

let count = 1;
export function getId(message: MessageProps) {
    if (message.id) {
        return message.id;
    }
    count += 1;
    return count;
}

export function findMessage(messageList: MessageList, id: number) {
    const position = getMessagePosition(messageList, id);
  
    const index = position ? messageList[position].findIndex((message) => message.id === id) : -1;
  
    return {
      position,
      index,
    };
}

export function getMessagePosition(message: MessageList, id: number) {
    for (const [position, list] of Object.entries(message)) {
        if (list.find(item => item.id === id)) {
            return position as Position;
        }
    }
}

function useStore(defaultPosition: Position = 'top') {
    const [messages, setMessages] = useState<MessageList>(initialState);
    return {
        messages,
        add: (messages: MessageProps) => {
            const id = getId(messages);
            setMessages((prevState) => {
                if (messages.id) {
                    const position = getMessagePosition(prevState, id);
                    if (position) return prevState;
                }
                const position = messages.position || defaultPosition;
                const isTop = position.includes('top');
                const messagesEnd = isTop
                    ? [{ ...messages, id }, ...(prevState[position] ?? [])]
                    : [...(prevState[position] ?? []), { ...messages, id }];
                return {
                    ...prevState,
                    [position]: messagesEnd,
                }
            });
            return id;
        },
        update: (id: number, message: MessageProps) => {
            if (!id) return;

            setMessages((preState) => {
              const nextState = { ...preState };
              const { position, index } = findMessage(nextState, id);
      
              if (position && index !== -1) {
                nextState[position][index] = {
                  ...nextState[position][index],
                  ...message,
                };
              }
      
              return nextState;
            });
         },
        remove: (id:number) => {
            setMessages((prevState) => {
                const position = getMessagePosition(prevState, id);
    
                if (!position) return prevState;
                return {
                    ...prevState,
                    [position]: prevState[position].filter((notice) => notice.id !== id),
                };
            });
         },
        clearAll: () => {
            setMessages({ ...initialState });
         }
    }
}
export default useStore;
