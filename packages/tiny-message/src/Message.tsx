import { FC, memo } from 'react';
import { MsgType } from './index';
import { FcInfo, FcOk, FcIdea, FcHighPriority } from 'react-icons/fc';

export interface MessageProps {
  type: MsgType;
  content: string;
}

const validateIcon: {
  [key: string]: FC;
} = {
  INFO: () => (
    <div className="mr-2">
      <FcInfo />
    </div>
  ),
  SUCESS: () => (
    <div className="mr-2">
      <FcOk />
    </div>
  ),
  WARN: () => (
    <div className="mr-2">
      <FcIdea />
    </div>
  ),
  ERROR: () => (
    <div className="mr-2">
      <FcHighPriority />
    </div>
  ),
};

const Message: FC<MessageProps> = ({ type, content }) => {
  const Icon = validateIcon[type];

  return (
    <>
      <div className="inline-flex items-center px-4 py-2 mt-4 bg-white rounded-lg shadow-lg">
        <Icon />
        {content}
      </div>
    </>
  );
};

export default memo(Message);
