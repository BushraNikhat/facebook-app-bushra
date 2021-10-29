import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions,Cancel} from "@material-ui/icons"
import { useContext, useRef,useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"

const Share = () => {
    const desc=useRef()
    const {user}=useContext(AuthContext)
    const [file,setFile]=useState(null)
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;


const handleSubmit=async (e)=>{
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
        console.log(newPost)
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
    
}
    return (
        <>
           <div className="shareContainer">
               <div className="shareWrapper">
                   <div className="shareTop">
                        <img src={user.profilePicture ? PF+ user.profilePicture : `${PF}person/no_avatar.png`} className="shareImage" alt="profile"/>
                        <input placeholder={`What's in your mind ${user.name}`} className="shareInput" ref={desc}/>
                   </div>
                   <hr className="shareHr" />
                   {file && (
                   <div className="ShareFile">
                       <img src={URL.createObjectURL(file)} alt="" className="shareImg"/>
                        <Cancel className="cancelFile" onClick={()=>setFile(null)}/>
                   </div>)
                   }
                   <form className="shareBottom" onSubmit={handleSubmit}>
                       <div className="shareOptions">
                             <label className="shareOption" htmlFor="file">
                                <PermMedia className="shareOptionIcon" htmlColor="tomato"/>
                               <input type="file" accept="image/*" className="shareOptionText" id="file" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                               <span className="shareOptionText">Photo or Video</span>
                               </label>
                           <div className="shareOption">
                                <Label className="shareOptionIcon" htmlColor="blue"/>
                           </div>
                           <div className="shareOption">
                                <Room className="shareOptionIcon" htmlColor="green"/>
                               <span className="shareOptionText">Location</span>
                           </div>
                           <div className="shareOption">
                                <EmojiEmotions className="shareOptionIcon" htmlColor="goldenrod"/>
                               <span className="shareOptionText">Feelings</span>
                           </div>
                       </div>
                       <button className="shareButton" type="submit">Share</button>
                   </form>
               </div>
           </div>
        </>
    )
}

export default Share
