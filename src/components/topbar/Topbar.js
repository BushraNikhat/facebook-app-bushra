
import "./topbar.css";
import {Person, Search,Chat,Notifications} from "@material-ui/icons"; 
import {NavLink} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const {user}=useContext(AuthContext)

  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <NavLink className="logo" to="/" style={{ textDecoration: 'none' }}>Fakebook</NavLink>
        </div>
        <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input
            placeholder="Search for friend or post"
            className="searchInput"
          />
          </div>
        </div>
        <div className="topbarRight">
          <div className="tobarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="tobarIconsItem">
              <Person />
              <span className="topbarBadge">1</span>
            </div>
            <div className="tobarIconsItem">
              <Chat/>
              <span className="topbarBadge">1</span>
            </div>
            <div className="tobarIconsItem">
              <Notifications/>
              <span className="topbarBadge">1</span>
            </div>
          </div>
          <NavLink to={`/profile/${user.name}`}>
          <img src={user.profilePicture ? PF+ user.profilePicture : `${PF}person/no_avatar.png`} alt="profilePic" className="topbarImage" />
          </NavLink>
        </div>
      </div>
    </>
  );
}
