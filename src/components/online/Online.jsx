import "./online.css"

const Online = ({friends}) => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <li className="rightbarFriend">
                  <div className="rightbarImageConatainer">
                      <img src={PF+friends.profilePicture} alt="rightbarProfileImage" className="rightbarProfileImage" />
                      <span className="rightbarOnlineBadge"></span>
                  </div>
                  <span className="rightbarUserName">{friends.name}</span>
              </li>
        </>
    )
}

export default Online
