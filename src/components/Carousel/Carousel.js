import React from 'react';
import '../Carousel/Carousel.css'
import leftArrow from '../../assets/images/left.png'
import rightArrow from '../../assets/images/right.png'
import Image from 'react-bootstrap/Image'
import img1 from '../../assets/images/logo.svg'




const carousel = (props) => {   
    
    return(
        <div className="Carousel">
          
            <div className="ArrowButtoms">
                <div><img className="arrow" src={leftArrow} alt="previous"/></div>
            </div>
            
            <div className="CarouselContainer">
                <Image src={img1}/>
            </div>

            <div className="ArrowButtoms" >
                <div><img className="arrow" src={rightArrow} alt="previous"/></div>
            </div>
        </div>
    );


}
export default carousel;