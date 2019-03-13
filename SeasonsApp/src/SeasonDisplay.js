import React from 'react';
import './SeasonDisplay.css';


const seasonConfig = {
    summer : {
        text : "Let's hit the beach !!",
        iconName : "  massive clockwise rotated sun"
    },
    winter : {
        text : "Blurr, Its Chilly !!",
        iconName : "  massive clockwise rotated snowflake"
    }
}
const getSeason=(lat , month) =>{
    if(month>2 && month <9){
        return lat > 0 ? "summer" : "winter" ;  
    }
    else {
        return lat > 0 ? "winter" : "summer";
    }

}

const SeasonDisplay = (props) => {
    console.log(props.latitude);
    const season = getSeason (props.latitude, new Date().getMonth());


    /* const text = season === "Winter" ? "Blurr, it is chilly " : "Lets hit the Beach" 
    const icon = season === "Winter" ? "snowflake outline" : "sun" */
   const {text , iconName } = seasonConfig[season];
  
    return (
        <div className = {`season-display ${season}`}>
            <i className= {` icon-left ${iconName} icon `} />
            <h1 className="disp-text">{text} </h1>
            <i className= {` icon-right ${iconName} icon `} />
        </div>
    )
}

export default SeasonDisplay;