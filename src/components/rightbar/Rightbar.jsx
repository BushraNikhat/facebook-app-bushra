import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import "./rightbar.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Add,Remove} from "@material-ui/icons"

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser,dispatch}=useContext(AuthContext)
  const [followUnfollow,setFollowUnfollow]=useState(currentUser.following.includes(user?._id))

  // for getting the friends of user
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/user/friends/${user._id}`);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getFriends();
  }, [user]);


// function for following and unfollowing users
const handleFollowUnfollow=async()=>{
    try {
        if (followUnfollow){
          await axios.put(`/user/${user._id}/unfollow`,{userId:currentUser._id})
          dispatch({type:"Unfollow",payload:user._id})
        }
        else{
          await axios.put(`/user/${user._id}/follow`,{userId:currentUser._id})
        }
        dispatch({type:"Follow",payload:user._id})
    } catch (error) {
      
    }
    setFollowUnfollow( ! followUnfollow)
}

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="./assests/gift.jpg"
            alt="birthdayImage"
            className="birthdayImage"
          />
          <span className="birthdayext">
            <strong>Ahana </strong>
            and <strong>3 other friends </strong>
            have birthday today
          </span>
        </div>
        <img
          src="./assests/advert.jpg"
          alt="rightbarAdd"
          className="rightbarAdd"
        />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="onlineFriendList">
          {friends.map((e)=>{
                return <Online key={e._id} friends={e}/>
            })}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
      {user.name !== currentUser.name && 
        <button className="rightbarFollowButton" onClick={handleFollowUnfollow}>
        {followUnfollow ? " Unfollow" : "Follow"}
        {followUnfollow ? <Remove/> : <Add/>}
        </button>
      }
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "In relationship"
                : user.relationship === 3
                ? "Complicated"
                : ""}
            </span>
          </div>
        </div>

        <h4 className="rightbarTitle">User's Friend</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => {
            return (
              <>
                <NavLink
                  to={`/profile/${friend.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="rightbarFollowing" key={friend._id}>
                    <img
                      src={
                        friend.profilePicture
                          ? PF + friend.profilePicture
                          : PF + `person/no_avatar.png`
                      }
                      alt=""
                      className="rightbarFollowingImage"
                    />
                    <span className="rightbarFollowingName">{friend.name}</span>
                  </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="rightbarContainer">
        <div className="rightbarWrapper">
          {user ? <ProfileRightBar /> : <HomeRightBar />}
        </div>
      </div>
    </>
  );
};

export default Rightbar;
