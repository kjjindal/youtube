import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import './Searchpage.css';
import Channelrow from './Channelrow';
import Videorow from './Videorow';





function Searchpage(){
    return (
        <>
        <div className="searchpage">
            <div className="searchpage__filter">
            <TuneIcon   />
            <h2> Filter   </h2>

            </div>
            <hr  />
            <Channelrow 
            
            channel="Code With Harry"
            subs="2.3M"
            description="Awesome Channel on Youtube"
            verified
            noofvideos={382}
            image=""
            

             />
             <hr />
             <Videorow 
             title="Profit Javascript"
            subs="2.3M"
            description="Awesome Channel on Youtube"
            image=""
            views="3.4M"
            channel="Code with harry"
            timestamp="5 days ago"
             
              />
        </div>



        </>
    )

}






export default Searchpage;