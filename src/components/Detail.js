import styled from 'styled-components';

const Detail = props => {
    return (
        <Container>
            <Background>
                <img 
                    alt=''
                    src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg'
                />    
            </Background>     
            <ImageTitle>
                <img 
                    alt=''
                    src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E837DDE901CD036DD87A00F2D63E2F2458FAA798E62BE91F973AECCEA313A67E/scale?width=1440&aspectRatio=1.78'
                />    
            </ImageTitle>   
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    position: fixed;
    inset: 0px;
    opacity: .8;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;
        @media (max-width: 760px){
            object-fit: fit;
            width: 100%;
            height: 100vh;
        }
    }
`;

const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin: 0px auto;
    height: 28vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 400px;
        min-width: 250px;
        width: 35vw;
    }
`;

export default Detail;