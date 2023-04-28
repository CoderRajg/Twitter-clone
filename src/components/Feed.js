import React from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebaseConfig";
import { getDocs,collection } from "firebase/firestore";
import FlipMove from "react-flip-move";
// import { collection, onSnapshot } from "firebase/firestore";

function Feed() {
  // displayName,username,verified,text,image,avatar
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "post"));
      const lists = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPost(lists);
    }
    getData();
  }, [post]);
  // useEffect(() => {
  //   const unsub = onSnapshot(doc(db, "post"), (doc) => {
  //     console.log("Current data: ", doc.data());
  //   });
  //   // console.log(db);
  //   // db.collection.onSnapshot()(snapshot=>{
  //   //   setPost([snapshot.docs.map(doc=>doc.data())])
  //   // })
  // }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* Header */}

      {/* Tweetbox */}
      <TweetBox />
      {/* Tweets/posts */}
      <FlipMove>
      {post.map((post) => (
        <Post
          // displayName={post.displayName}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
      </FlipMove>
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
    </div>
  );
}

export default Feed;
