import React from  'react';
import {Avatar} from '@material-ui/core'
import './channelrow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



function Channelrow({channel,subs,description,verified,image,noofvideos}){

    return (
        <>
        <div className="channelrow">
        <Avatar  className="channelrow__logo" alt={channel}  src={image}  />
        <div className="channelrow__text">
        <h4> {channel}  {verified && <CheckCircleIcon   />} </h4>
        <p className="channelrow__subscribers"> {subs} subscribers {noofvideos}  videos  </p>
        <p className="channelrow__description"> {description}  </p>

        </div>

        </div>



        </>


    )

}


export default Channelrow;