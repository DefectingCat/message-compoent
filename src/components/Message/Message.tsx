import { FC, memo } from 'react';
import { MsgType } from './index';
import { FcInfo, FcOk, FcIdea, FcHighPriority } from 'react-icons/fc';

interface Props {
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

const Message: FC<Props> = ({ type, content }) => {
  const Icon = validateIcon[type];

  return (
    <>
      <div className="shadow-lg rounded-lg bg-white py-2 px-4 mt-4 inline-flex items-center">
        <Icon />
        {content}
      </div>
    </>
  );
};

export default memo(Message);
