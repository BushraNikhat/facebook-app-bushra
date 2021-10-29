import "./friends.css"

const Friends = ({friends}) => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <li className="leftbarFriendListItem">
        <img
          src={PF+friends.profilePicture}
          alt="friendImage"
          className="leftbarFriendImg"
        />
        <span className="leftbarFriendName">{friends.name}</span>
      </li>
    </>
  );
};

export default Friends;
