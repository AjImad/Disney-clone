import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useEffect, useState } from "react";


const Recommends = props => {
    
    const movies = useSelector(selectRecommend)
    const [loading, setLoading] = useState(false)
    let [color, setColor] = useState("#ffffff");

    useEffect( () => {
        setLoading(true)
        const timer =  setTimeout( () => { 
            if(movies) setLoading(false) 
        }, 500)

        return () => clearTimeout(timer)
    },[movies])

    return (
        <Container>
            <h4>Recommended page is here you</h4>
            {
                 loading ?
                 <Loader>
                     <PropagateLoader color={color} loading={loading} size={10} />
                 </Loader>
                 :
                <Content>
                    {
                        movies && movies.map((movie, key) => (
                                <Wrap key={key}>
                                    <Link to = { `/detail/` + movie.id }>
                                    <img src={movie.cardImg} alt={movie.title} />
                                    </Link>
                                </Wrap>
                            ))
                           
                    }
                </Content>
            }
            
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0 26px;
`;

const Content = styled.div`
    padding-top: 25px;
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
    
    @media (max-width: 760px) {
       grid-template-columns: repeat(2, minmax(0,1fr))
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow: hidden;
    position: relative;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        inset: 0px;
        position: absolute;
        object-fit: cover;
        display: block;
        height: 100%;
        width: 100%;
        z-index: 1;
        top: 0;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.02);
        border-color: rgba(249, 249, 249, 0.8);
        opacity: 0.8
    }
`;

const Loader = styled.div`
    display: grid;
    place-items: center;
    margin: 20px 0;
`;

export default Recommends;