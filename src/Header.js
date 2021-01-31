import {React,useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import {Link} from 'react-router-dom';


function Header(){
    const [inputsearch,setinputsearch]=useState('');

    function changeinput(e){
        setinputsearch(e.target.value);

    }

    return (
        <>
        <div className="header">
        <div className="header_left">
<MenuIcon  />
           <Link to='/' className="header__logo__anchor"  >
           <h2 className="header_logo"  > You<span >Tube</span></h2>


           </Link>
        </div>
        <div className="header_center">
            <input type="text" placeholder="Search" value={inputsearch} onChange={changeinput}  />
            <Link to={`/search/${inputsearch}`}>
            <SearchIcon className="header_inputbutton" />

            </Link>
        </div>
        <div className="header_right">
           <VideoCallIcon  />
            <AppsIcon   />
            <NotificationsIcon  />
            <Avatar  src='https://www.codewithharry.com/static/home/img/photo.png'  alt= 'user' />
  
        </div>

            
 
  
           
         


            
        </div>



        </>
    )



}


export default Header;