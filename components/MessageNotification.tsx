import { AiFillMessage, AiTwotoneMessage } from "react-icons/ai";

type MessageNotificationProps = {
  hasNewMessage: boolean;
};

const MessageNotification: React.FC<MessageNotificationProps> = ({
  hasNewMessage,
}) => {
  if (!hasNewMessage) {
    return <AiTwotoneMessage color="orange" size={32} />;
  }
  console.log("MessageNotification props:", { hasNewMessage }); // Debug log

  return (
    <div className="relative">
      <AiTwotoneMessage color="orange" size={32} />; //{" "}
      {hasNewMessage && (
        <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
      )}
    </div>
  );
};

export default MessageNotification;
