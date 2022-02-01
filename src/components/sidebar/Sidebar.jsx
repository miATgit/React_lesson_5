import './sidebar.css';
import { RssFeed, Bookmark, HelpOutline, WorkOutline, Event, School, Group } from '@material-ui/icons';

export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img src="/assets/Person/2.jpeg" alt="" className='sidebarFriendImg'/>
                <span className="sidebarFriendName">Jake Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/Person/3.jpeg" alt="" className='sidebarFriendImg'/>
                <span className="sidebarFriendName">Mbuenga Nguenga</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/Person/4.jpeg" alt="" className='sidebarFriendImg'/>
                <span className="sidebarFriendName">Paula Drake</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/Person/5.jpeg" alt="" className='sidebarFriendImg'/>
                <span className="sidebarFriendName">Sara Perkins</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/Person/6.jpeg" alt="" className='sidebarFriendImg'/>
                <span className="sidebarFriendName">Ivana Petrovic</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/Person/7.jpeg" alt="" className='sidebarFriendImg'/>
                <span className="sidebarFriendName">Buhue Muhue</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/Person/8.jpeg" alt="" className='sidebarFriendImg'/>
                <span className="sidebarFriendName">Chirsten Samuels</span>
            </li>
        </ul>
      </div>
  </div>;
}
