import "./feed.css"
import Share from "../share/Share";
import Post from "../post/Post";
import MessageList from "../messageList/MessageList";

export default function Feed() {
  return <div className="feed">
      <div className="feedWrapper">
        <MessageList />
        <Share />
        <Post />
      </div>
  </div>;
}
