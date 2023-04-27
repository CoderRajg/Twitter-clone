import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";

function Post({displayName,username,verified,text,image,avatar}) {
  
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headertext">
            <h3>
              {displayName}{" "}
              <span>
                {verified && <VerifiedIcon className="verified-icon" /> }
              </span>
              <span className="post-username">@{username}</span>
            </h3>
          </div>
          <div className="post-text">
            <p>
              {text}
            </p>
          </div>
          <img
            src={image}
            alt=""
          />
          <div className="post-bottom">
            <ChatBubbleOutlineOutlinedIcon />
            <RepeatIcon />
            <FavoriteBorderIcon />
            <PollIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
