import { FC, memo } from 'react';
import { MsgType } from './index';
import { FcInfo, FcOk, FcIdea, FcHighPriority } from 'react-icons/fc';
import style from './message.module.css';

export interface MessageProps {
  type: MsgType;
  content: string;
}

const validateIcon: {
  [key: string]: FC;
} = {
  INFO: () => (
    <div className={style.icon}>
      <FcInfo />
    </div>
  ),
  SUCESS: () => (
    <div className={style.icon}>
      <FcOk />
    </div>
  ),
  WARN: () => (
    <div className={style.icon}>
      <FcIdea />
    </div>
  ),
  ERROR: () => (
    <div className={style.icon}>
      <FcHighPriority />
    </div>
  ),
};

const Message: FC<MessageProps> = ({ type, content }) => {
  const Icon = validateIcon[type];

  return (
    <>
      <div className={style.message}>
        <Icon />
        {content}
      </div>
    </>
  );
};

export default memo(Message);
