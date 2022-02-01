import './messageList.css';

export default function MessageList() {
  return (
    <div className="messageList">
        <div className="messageListWrapper">
            <div className="messageContainer left">
                <div className="message chatOwner">сообщение 1</div>
            </div>
            <div className="messageContainer right">
                <div className="message chatGuest">сообщение 2</div>
            </div>
        </div>
    </div>
  )}
