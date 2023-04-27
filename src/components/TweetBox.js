import React, { useState } from "react";
import "./tweetBox.css";
import { Avatar, Button } from "@mui/material";
import { db } from "./firebaseConfig";
import { addDoc,collection } from "firebase/firestore";

function TweetBox() {
  const [tweet, setTweet] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sentTweet = async function(e){
    e.preventDefault();
    await addDoc(collection(db,'post'),{
      displayName: "Raj Gupta",
      username: "raj_gupta",
      verified: true,
      text: tweet,
      avatar:"https://www.bollywoodhungama.com/wp-content/uploads/2023/04/Yash-Raj-Films-decides-to-take-a-break-from-Ranveer-Singh-after-his-hat-trick-of-flops-2.jpg",
      image:tweetImage
    });
    setTweet("");
    setTweetImage("");
    // db.collection('post').add({
    //   displayName: "Raj Gupta",
    //   userName: "raj_gupta",
    //   varified: true,
    //   text: tweet,
    //   avatar:"https://www.bollywoodhungama.com/wp-content/uploads/2023/04/Yash-Raj-Films-decides-to-take-a-break-from-Ranveer-Singh-after-his-hat-trick-of-flops-2.jpg",
    //   image:tweetImage
    // })
  }
  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          <Avatar src="data:image/jpeg;base64,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" />
          <input
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            type="text"
            placeholder="Enter the url of the image"
            className="tweet-box-imageInput"
          />
        <Button onClick={sentTweet} type="submit" className="tweet-box-btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
