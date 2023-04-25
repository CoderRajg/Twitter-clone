import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets-container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1641787663014584320"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RanveerOfficial"
          options={{ height: 400 }}
        />
        <TwitterShareButton url={"https://www.facebook.com/RanveerSinghOfficial/"}
        options={{text:"#reactJs is awesome i am loving it" , via:"Raj gupta"}}/>
      </div>
    </div>
  );
}

export default Widgets;
