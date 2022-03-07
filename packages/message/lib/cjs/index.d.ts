import './index.css';
export declare type MsgType = 'INFO' | 'SUCESS' | 'WARN' | 'ERROR';
export declare type Msg = {
    id: number;
    type: MsgType;
    content: string;
};
declare const message: {
    info: (content: string) => void;
    sucess: (content: string) => void;
    warn: (content: string) => void;
    error: (content: string) => void;
};
export default message;
export * from './Message';
