import { MessageProps, Position } from '.';
type MessageList = {
    top: MessageProps[];
    bottom: MessageProps[];
};
export declare function getId(message: MessageProps): number;
export declare function findMessage(messageList: MessageList, id: number): {
    position: Position | undefined;
    index: number;
};
export declare function getMessagePosition(message: MessageList, id: number): Position | undefined;
declare function useStore(defaultPosition?: Position): {
    messages: MessageList;
    add: (messages: MessageProps) => number;
    update: (id: number, message: MessageProps) => void;
    remove: (id: number) => void;
    clearAll: () => void;
};
export default useStore;
