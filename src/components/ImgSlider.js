import styled from 'styled-components';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <div>
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src='/images/slider-badag.jpg' alt='' />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='/images/slider-badging.jpg' alt='' />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='/images/slider-scale.jpg' alt='' />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='/images/slider-scales.jpg' alt='' />
                    </a>
                </Wrap>
            </Carousel>
        </div>
    )
}

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &: hover{
            opacity: 1;
            transition: opacity 0.5s ease 0s;
        }
    }

    ul li button {
        &:before{
            color: rgb(150, 158, 171);
            font-size: 10px
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: initial;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    
    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img{
            width: 100%;
            height: 100%;
        }

        &:hover{
            padding: 0;
            margin: 0;
            transition-duration: 250ms;
            border: 4px solid white
        }
    }
`;

export default ImgSlider;