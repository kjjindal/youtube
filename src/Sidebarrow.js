import React from 'react';
import './Sidebarrow.css';





function Sidebarrow(props){

    return (
        <>

        <div className={`sidebarrow ${props.selected && "selected"} `}>

        <props.Icon  className="sidebarrow__icon" /> 
         <h2  className="sidebarrow__title" > {props.title}  </h2>
        </div>




        </>
    )


}


export default Sidebarrow;