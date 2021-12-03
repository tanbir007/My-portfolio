import React from 'react';
import './Toggle.css'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import { useContext } from "react";
import { ThemeContext } from "../../context";
const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
      theme.dispatch({ type: "TOGGLE" });
    };
    return (
        <div className="t">
             <img src={sun} alt="" className="t-icon"></img>
            
             <img src={moon} alt="" className="t-icon"></img>
             <div className="t-button"
             
             onClick={handleClick}
             style={{ left: theme.state.darkMode ? 0 : 25 }}
             
             ></div>
        </div>
    );
};

export default Toggle;