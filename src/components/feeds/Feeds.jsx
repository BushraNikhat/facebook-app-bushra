import { useContext, useEffect, useState } from "react";
import "./feeds.css";
import axios from "axios";
import Share from "../share/Share";
import Post from "../posts/Post";
import { AuthContext } from "../../context/AuthContext";

const Feeds = ({ name }) => {
  const [posts, setPosts] = useState([]);
  const {user}=useContext(AuthContext)

  useEffect(() => {
    const fetchPost = async () => {
      const response = name
        ? await axios.get(`/posts/profile/${name}`)
        : await axios.get(`posts/timeline/${user._id}`);
      setPosts(response.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    };
    fetchPost();
  }, [name,user._id]);

  return (
    <>
      <div className="feedsContainer">
        <div className="feedsWrapper">
          {(!name || name===user.name) && <Share />}
          {posts.map((p) => {
            return <Post key={p._id} post={p} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Feeds;
