import { AiFillMessage } from "react-icons/ai";

type MessageNotificationProps = {
  hasNewMessage: boolean;
};

const MessageNotification: React.FC<MessageNotificationProps> = ({
  hasNewMessage,
}) => {
  if (!hasNewMessage) return null;
  console.log("MessageNotification props:", { hasNewMessage }); // Debug log

  return (
    <div className="absolute top-4 right-4">
      <AiFillMessage size={32} color="red" />
    </div>
  );
};

export default MessageNotification;
