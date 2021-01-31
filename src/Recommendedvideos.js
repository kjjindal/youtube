import React from 'react';
import './Recommendedvideos.css';
import Videocard from './Videocard';


function Recommendedvideos(){

    return (
    <>
   <div className="recommendedvideos">
     <h2> Recommendedvideos   </h2> 
     <div className="recommendedvideos__videos">
         <Videocard  title="Funny video" channel="RJ05" views='2.3M' timestamp="2 days ago"  />
         <Videocard  title="Funny video" channel="RJ05" views='2.3M' timestamp="2 days ago"  />
         <Videocard  title="Funny video" channel="RJ05" views='2.3M' timestamp="2 days ago"  />
         <Videocard  title="Funny video" channel="RJ05" views='2.3M' timestamp="2 days ago"  />

         


         

     </div>

   </div>


    </>
    )

}
export default Recommendedvideos;