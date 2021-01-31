import React from 'react';
import './Videorow.css';

function Videorow({ title,
subs,
description,
image,
views,
channel,timestamp}){

    return (
        <>
        <div className="videorow">
        <img src={image} alt={title} />
        <div className="videorow__text">
        <h3> {title} </h3>
        <p className="videorow__headline"> {channel} .
        <span  className="videorow__subs">   
        <span className="videorow__subsrow"> {subs}</span>  subscribers </span>
        
         . {views} views . {timestamp}   </p>
        <p>  {description} </p>

        </div>

        </div>


        </>
    )

}


export default Videorow;