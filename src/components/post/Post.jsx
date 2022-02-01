import './post.css';
import { MoreVert } from '@material-ui/icons';

export default function Post() {
  return (
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img className="postProfileImg" src="/assets/Person/4.jpeg" alt="" />
                      <span className="postUsername">Jane Smith</span>
                      <span className="postDate">5 min ago</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert className=""/>
                  </div>
              </div>
              <div className="postCenter"></div>
              <div className="postBottom"></div>
          </div>
      </div>
  )
}
