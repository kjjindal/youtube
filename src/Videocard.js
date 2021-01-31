import { Avatar } from '@material-ui/core';
import React from 'react';
import './Videocard.css';



function Videocard({image,title,channel,views,timestamp,channelImage}){

    return (
        <>

        <div className="videocard">
        <img src={image} alt={title} />
        <div className="videocard__info">
        <Avatar className="videocard__avatar"  src={channelImage}  alt={channel}  />
        <div className="videocard__text">
        <h4>{title} </h4>
        <p>  {channel} </p>
        <p>
        {views}.{timestamp}

        </p>


        </div>

        </div>





        </div>



        </>
    )
}


export default Videocard;