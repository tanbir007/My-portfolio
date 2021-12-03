import React from 'react';
import'./about.css'
import award from '../../img/award.png';
const about = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card-bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt=""
                    className="a-img"></img>
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         Make a website. Brand your Business. Make your own growth , make your future.
        </p>
        <p className="a-desc">
        🍻 Cheers, I am Tanbir,
        an award winning frontend developer from BANGLADESH.
        </p>
        <div className="a-award">
            <img src={award}
            alt="" className="a-award-img"></img>
        </div>
        <div className="a-award-texts">
            <h4 className="a-award-title">Bangladesh Developer Awards 2021</h4>
            <p className="a-award-desc">
              This is the most prestigius award  for <b> web Developers</b>. 
            </p>
          </div>
            </div>
            
        </div>
    );
};

export default about;
