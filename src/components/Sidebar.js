import React from 'react'
import './sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


function Sidebar() {
  return (
    <div className='sidebar'>
      {/* twitter icon */}
      <TwitterIcon className='twitter-icn'/>

      {/* othericons */}
      <SidebarOption active Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={ExploreIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
      <SidebarOption Icon={MessageIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkIcon} text="Bookmark"/>
      <SidebarOption Icon={AccountCircleIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>
      
      {/* buttons of tweet */}
      <Button variant='outlined' className='tweet-btn' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar
