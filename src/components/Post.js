import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";

function Post() {
  // display name,
  // username,
  // verified,
  // text,
  // image,
  // avatar
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src="https://www.bollywoodhungama.com/wp-content/uploads/2023/04/Yash-Raj-Films-decides-to-take-a-break-from-Ranveer-Singh-after-his-hat-trick-of-flops-2.jpg"/>
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headertext">
            <h3>
              Raj Gupta{" "}
              <span>
                <VerifiedIcon className="verified-icon" />
              </span>
              <span className="post-username">@raj_gupta</span>
            </h3>
          </div>
          <div className="post-text">
            <p>
              This is twitter colne i am making and i will make it with my best
              of knowledge thanku every youtuber to make it possible
            </p>
          </div>
          <img
            src="https://www.bollywoodhungama.com/wp-content/uploads/2023/04/Yash-Raj-Films-decides-to-take-a-break-from-Ranveer-Singh-after-his-hat-trick-of-flops-2.jpg"
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
