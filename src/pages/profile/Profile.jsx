import { useEffect,useState } from "react";
import axios from "axios"
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feeds from "../../components/feeds/Feeds";
import Rightbar from "../../components/rightbar/Rightbar";
import {useParams} from "react-router-dom"
const Profile = () => {
  const [user,setUser]=useState({})
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const params=useParams()
// fetching users from the backend using the post's username
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `/user?name=${params.username}`
      );
      setUser(response.data);
    };
    fetchUser();
  }, [params.username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
          <div className="profileCover">
              <img src={user.coverPicture ? PF+ user.coverPicture : `${PF}person/no_cover.jpg`} alt="profileCoverImage" className="profileCoverImage" />
              <img src={user.profilePicture ? PF+ user.profilePicture : `${PF}person/no_avatar.png`} alt="profileUserImage" className="profileUserImage" />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">{user.name}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
          </div>
          </div>
          <div className="profileRightBottom">
            <Feeds name={user.name}/>
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
