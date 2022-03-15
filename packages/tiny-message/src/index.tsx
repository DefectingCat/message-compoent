import { FC } from 'react';
import { render } from 'react-dom';
import { useImmer } from 'use-immer';
import Message from './Message';
import { motion, AnimatePresence, AnimationProps } from 'framer-motion';
import style from './index.module.css';
import { enableMapSet } from 'immer';

enableMapSet();

export type MsgType = 'INFO' | 'SUCESS' | 'WARN' | 'ERROR';

export type Msg = {
  type: MsgType;
  content: string;
};

// Init message wrapper
let el = document.querySelector('#message-wrapper');

if (!el) {
  el = document.createElement('div');
  el.className = `${style['message-wrapper']}`;
  el.id = 'message-wrapper';
  document.body.append(el);
}

let add: (msg: Msg) => void = () => {};

const variants: AnimationProps['variants'] = {
  enter: {
    opacity: [0, 1],
    y: [-66, 0],
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: [1, 0],
    y: [0, -66],
    transition: { duration: 0.3 },
  },
};

const MessageContainer: FC = () => {
  const [msgList, setMsgList] = useImmer<Map<number, Msg>>(new Map());

  add = (msg) => {
    setMsgList((list) => {
      const id = new Date().getTime();
      list.set(id, msg);

      const arr = Array.from(list);
      if (arr.length > 10) list.delete(arr[0][0]);

      setTimeout(() => {
        setMsgList((list) => {
          list.delete(id);
        });
      }, 3000);
    });
  };

  return (
    <>
      <div className={`${style['message-container']}`}>
        <AnimatePresence>
          {Array.from(msgList).map((list) => (
            <motion.div
              key={list[0]}
              variants={variants}
              animate="enter"
              className={style.motion}
              exit="exit"
              layout="position"
            >
              <Message type={list[1].type} content={list[1].content} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

render(<MessageContainer />, el);

const message = {
  info: (content: string) =>
    add({
      type: 'INFO',
      content,
    }),
  sucess: (content: string) =>
    add({
      type: 'SUCESS',
      content,
    }),
  warn: (content: string) =>
    add({
      type: 'WARN',
      content,
    }),
  error: (content: string) =>
    add({
      type: 'ERROR',
      content,
    }),
};

export default message;
export * from './Message';
