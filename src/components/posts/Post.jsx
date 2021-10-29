import { useContext, useEffect,useState } from "react";
import "./post.css";
import axios from "axios"
import { MoreVert } from "@material-ui/icons";
import { format} from 'timeago.js'
import {NavLink} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [user,setUser]=useState({})
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser}=useContext(AuthContext)
  
  useEffect(()=>{
    setIsLike(post.likes.includes(currentUser._id))
  },[currentUser._id,post.likes])

  const likeHandler = async() => {
    try {
     await axios.put(`/posts/${post._id}/like`,{userId:currentUser._id})
    } catch (error) {
      console.log(error.message)
    }
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

//   fetching users from the backend using the post's userId
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `/user?userId=${post.userId}`
      );
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <>
      <div className="postContainer">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
            <NavLink to={`/profile/${user.name}`}>
              <img
                src={user.profilePicture ? PF+ user.profilePicture : `${PF}person/no_avatar.png`}
                alt="postProfileImage"
                className="postProfileImage"
              />
              </NavLink>
              <span className="postUserName">
                {user.name}
              </span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.image ? PF + post.image : null} alt="postImage" className="postImage" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                src={`${PF}like.png`}
                alt="likeImage"
                className="likeImage"
                onClick={likeHandler}
              />
              <img
                src={`${PF}heart.jpg`}
                alt="heartImage"
                className="heartImage"
                onClick={likeHandler}
              />
              <span className="postLikeCounter">{like}</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommenttext">{post.comment}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
