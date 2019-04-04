import React,{useState} from 'react';
import '../Carousel/Carousel.css'
import leftArrow from '../../assets/images/left.png'
import rightArrow from '../../assets/images/right.png'
import Image from 'react-bootstrap/Image'

const carousel = () => {   

    const [imagesList] = useState({
        actors : [
            {image: require('../../assets/images/Carousel/image1.jpeg')},
            {image: require('../../assets/images/Carousel/image2.jpeg')},
            {image: require('../../assets/images/Carousel/image3.jpeg')},
            {image: require('../../assets/images/Carousel/image4.jpeg'),},
            {image: require('../../assets/images/Carousel/image5.jpeg'),},
            {image: require('../../assets/images/Carousel/image6.jpeg'),}
        ]
    })

    const [actImg,setActImg] = useState({
        numIndex:0
    })

    const leftClickHandle=()=>{
        let previousIndex = actImg.numIndex-1;
        if(previousIndex<0){
            previousIndex = ((imagesList.actors.length)-1)
        }
        setActImg({
            numIndex : previousIndex
        })
    }


    const rightClickHandle=()=>{
        let nextIndex = actImg.numIndex+1;
        if(nextIndex>=imagesList.actors.length){
            nextIndex = 0
        }
        setActImg({
            numIndex : nextIndex
        })
    }

    return(
        <div className="Carousel">                  
            <div className="ArrowButtoms" onClick={()=>leftClickHandle()}>
                <div><img className="arrow" src={leftArrow} alt="previous"/></div>
            </div>
            
            <div className="CarouselContainer">
                <div>
                    <Image className="imgCarousel" src={imagesList.actors[actImg.numIndex].image} />
                </div>
            </div>

            <div className="ArrowButtoms" onClick={()=>rightClickHandle()}>
                <div><img className="arrow" src={rightArrow} alt="previous" /></div>
            </div>
        </div>
    );
}
export default carousel;