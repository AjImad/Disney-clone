import styled from 'styled-components';

const Viewers = (props) => {
    return (
       <Container>
           <Wrap>
               <img src='/images/viewers-disney.png' alt='' />
               <video autoPlay={true} loop={true} playsInline={true}> 
                    <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
               </video>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-pixar.png' alt='' />
               <video autoPlay={true} loop={true} playsInline={true}>
                   <source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
               </video>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-starwars.png' alt='' />
               <video autoPlay loop playsInline>
                   <source src='/videos/1608229455-star-wars.mp4' type='video/mp4' />
               </video>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-marvel.png' alt='' />
               <video autoPlay loop playsInline>
                   <source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
               </video>
           </Wrap>
           <Wrap>
               <img src='/images/viewers-national.png' alt='' />
               <video autoPlay loop playsInline>
                   <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4' />
               </video>
           </Wrap>
       </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    place-items: center;
    gap: 20px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 760px){
        grid-template-columns: repeat(1, minmax(0, 1fr))
    }
`;


const Wrap = styled.div`
    padding-top: 54.25%;
    overflow: hidden;
    position: relative;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    width: 100%;
    
    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: fit;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in 0s;
        width: 100%;
        z-index: 1;
    }   
    
    video{
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0px;
        opacity: 0;    }
        transition: opacity 500ms ease-in 0s;
    }
    
    &:hover{
        border: 3px solid rgba(249, 249, 249, 0.8);
        transform: scale(1.01);
        img{
            opacity: 0
        }
        video{
            opacity: 1
        }
    }
`;

export default Viewers;