import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { useEffect } from 'react';
import db from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        if(userName){ 
            db.collection("movies").onSnapshot ( (snapshot) => {
                snapshot.docs.map((doc) => {
                    // console.log(recommends)
                    switch(doc.data().type){
                        case 'recommend':
                            recommends = [...recommends, {id: doc.id, ...doc.data()}]
                            break;
                        case 'new':
                            newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]
                            break;
                        case 'original':
                            originals = [...originals, {id: doc.id, ...doc.data()}]
                            break;
                        case 'trending':
                            trending = [...trending, {id: doc.id, ...doc.data()}]
                            break;
                    }
                })
                // console.log('recommends', recommends)
                dispatch(setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
                )
            })
        }else{
            navigate('/')
        }
    }, [userName])
    
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 25px);
    overflow-x: hidden;
    display: block;
    top: 75px;
    padding: 5px calc(3.5vh + 5px);

    &:after{
        background-image: url('/images/home-background.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1
    }
`;

export default Home;