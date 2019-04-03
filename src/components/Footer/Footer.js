import React from 'react';
import './Footer.css'
import Fac from '../../assets/images/social media/facebook.png'
import Ins from '../../assets/images/social media/instagram.png'
import Twt from '../../assets/images/social media/twitter.png'

const footer=()=>{
    return(
        <div className="Footer">
            <div className="FotterP1">
                <div>© 2019 Safari. Terms of Service | Privacy Policy</div>
            </div>

            <div className="FotterP2">
            <div className="ImgSocialMedia1">
                    <a className="ImgSocialMedia2" href="http://facebook.com" target="_blank">
                        <img className="iconRS"  src={Fac} alt='FACEBOOK' />
                    </a>
                </div>
                <div className="ImgSocialMedia1">
                    <a className="ImgSocialMedia2" href="https://www.instagram.com" target="_blank">
                        <img className="iconRS"  src={Ins} alt='INSTAGRAM'/>
                    </a>
                </div>
                <div className="ImgSocialMedia1">
                    <a className="ImgSocialMedia2" href="https://twitter.com/" target="_blank">
                        <img className="iconRS" src={Twt} alt='TWITTER' />
                    </a>
                </div>
                
                
                
            </div>
            
            
        </div>
    );
}
export default footer;