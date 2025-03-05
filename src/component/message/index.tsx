import { CSSProperties, FC, ReactNode, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useStore from "./useStore";

export type Position = 'top' | 'bottom';

export interface MessageProps {
    style?: CSSProperties;
    className?: string | string[];
    content: ReactNode;
    duration?: number;
    id?: number;
    position?: Position;
}

export const MessageProvider: FC<{}> = (props) => {

    const { messages, add, update, remove, clearAll } = useStore('top');
    useEffect(() => {
        setInterval(() => {
            add({
                content: Math.random().toString().slice(2, 8)
            })
        }, 2000);
    }, []);
    const positions = Object.keys(messages) as Position[];
    return <div>
        {
            positions.map(direction => {
                return <TransitionGroup className={`message-wrapper-${direction}`} key={direction}>
                    {
                        messages.top.map(item => {
                            return <CSSTransition key={item.id} timeout={1000} classNames='message'>
                                <div style={{ width: 100, lineHeight: '30px', border: '1px solid #000', margin: '20px' }}>
                                    {item.content}
                                </div>
                            </CSSTransition>
                        })
                    }
                </TransitionGroup>
            })

        }
    </div>
}