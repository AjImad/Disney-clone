import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
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