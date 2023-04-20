import React from 'react'
import './feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed_header">
      <h2>Home</h2>
      </div>
      {/* Header */}

      {/* Tweetbox */}
      <TweetBox/>
      {/* Tweets/posts */}
      <Post/>
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
      {/* Tweets/posts */}
    </div>
  )
}

export default Feed
