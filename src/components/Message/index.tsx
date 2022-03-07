import { FC, useEffect } from 'react';
import { render } from 'react-dom';
import { useImmer } from 'use-immer';
import Message from './Message';
import { motion, AnimatePresence, AnimationProps } from 'framer-motion';

// export const enum MsgType {
//   INFO = 'INFO',
//   SUCESS = 'SUCESS',
//   WARN = 'WARN',
//   ERROR = 'ERROR',
// }

export type MsgType = 'INFO' | 'SUCESS' | 'WARN' | 'ERROR';

type Msg = {
  id: number;
  type: MsgType;
  content: string;
};

// Init message wrapper
let el = document.querySelector('#message-wrapper');

if (!el) {
  el = document.createElement('div');
  el.className =
    'message-wrapper fixed h-[100vh] w-[100vw] top-0 left-0 -z-10 flex justify-center';
  el.id = 'message-wrapper';
  document.body.append(el);
}

let add: (msg: Msg) => void = (msg: Msg) => {};

const variants: AnimationProps['variants'] = {
  enter: {
    opacity: [0, 1],
    top: [-66, 0],
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: [1, 0],
    top: [0, -66],
    transition: { duration: 0.3 },
  },
};

const MessageContainer: FC = () => {
  const [msgList, setMsgList] = useImmer<Msg[]>([]);

  add = (msg) => {
    setMsgList((list) => {
      list.push(msg);

      if (list.length > 10) list.shift();

      setTimeout(() => {
        setMsgList((list) => {
          list.shift();
        });
      }, 3000);
    });
  };

  return (
    <>
      <div className="message-container relative text-center">
        <AnimatePresence>
          {msgList.map((msg) => (
            <motion.div
              key={msg.id}
              variants={variants}
              animate="enter"
              className="relative"
              initial={{ opacity: 0 }}
              exit="exit"
              layout="position"
            >
              <Message type={msg.type} content={msg.content} />
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
      id: new Date().getTime(),
      type: 'INFO',
      content,
    }),
  sucess: (content: string) =>
    add({
      id: new Date().getTime(),
      type: 'SUCESS',
      content,
    }),
  warn: (content: string) =>
    add({
      id: new Date().getTime(),
      type: 'WARN',
      content,
    }),
  error: (content: string) =>
    add({
      id: new Date().getTime(),
      type: 'ERROR',
      content,
    }),
};

export default message;
