import React from 'react';
import './Sidebar.css';
import Sidebarrow from './Sidebarrow'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';




//always use first letter capital of attribute to pass icon and special value....
function Sidebar(){

    return (
        <>
        <div className="sidebar">
      <Sidebarrow selected  Icon={HomeIcon}  title="Home"  />
      <Sidebarrow  Icon={WhatshotIcon} title="Trending" />
      <Sidebarrow  Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <Sidebarrow  Icon={VideoLibraryIcon} title="Library"  />
      <Sidebarrow  Icon={HistoryIcon} title="History"  />
      <Sidebarrow  Icon={OndemandVideoIcon} title="Your Videos" />
      <Sidebarrow  Icon={WatchLaterIcon} title="Watch Later" />
      <Sidebarrow  Icon={ThumbUpAltIcon} title="Liked Video" />
      <Sidebarrow  Icon={ExpandMoreIcon} title="Show More" />




        </div>

        </>
    )

}


export default Sidebar;