import "./leftbar.css"
import {RssFeed,Chat,PlayCircleFilled,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from "@material-ui/icons"
import Friends from "../friends/Friends"
import { Users } from "../../dummyData";

const Leftbar = () => {
    return (
        <>
            <div className="leftbarContainer">
               <div className="leftbarWrapper">
               <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeed className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feeds</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarIcon"/>
                        <span className="leftbarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <PlayCircleFilled className="leftbarIcon"/>
                        <span className="leftbarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <Group className="leftbarIcon"/>
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarIcon"/>
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <HelpOutline className="leftbarIcon"/>
                        <span className="leftbarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <WorkOutline className="leftbarIcon"/>
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <Event className="leftbarIcon"/>
                        <span className="leftbarListItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <School className="leftbarIcon"/>
                        <span className="leftbarListItemText">Courses</span>
                    </li>
               </ul>
                 <button className="leftbarButton">Show more</button>  
                 <hr className="leftBarHr"/>
                 <ul className="leftbarFriendList">
                 {Users.map((e)=>{
                return <Friends key={e.id} friends={e}/>
            })}
                    
                 </ul>
               </div>
            </div>
        </>
    )
}

export default Leftbar

