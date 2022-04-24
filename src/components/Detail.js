import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from "../firebase"
import { useSelector } from 'react-redux';
import { selectUserName } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Detail = props => {

    const userName = useSelector(selectUserName);
    const navigate = useNavigate();
    let { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        if(userName){ 
            db.collection("movies").doc(id)
                .get().then( (doc) => {
                if(doc.exists) {
                    setDetail(doc.data())
                }else{
                    console.log("no such documents in firebase!")
                }
                })
                .catch( error => {
                    console.log("Error getting document: ", error.message)
                })
        }else{
            navigate('/')
        }
    
    }, [id, userName])

    return (
        <Container>    
                <Background>
                    <img 
                        alt=''
                        src={detail.backgroundImg}
                    />    
                </Background>     
                <ImageTitle>
                    <img 
                        alt=''
                        src={detail.titleImg}
                    />    
                </ImageTitle>   
                <ContentMeta>
                    <Controls>
                        <Player>
                            <img src='/images/play-icon-black.png' alt='' />
                            <span>Play</span>
                        </Player>
                        <Trailer>
                            <img src='/images/play-icon-white.png' alt='' />
                            <span>Trailer</span>
                        </Trailer>
                        <AddList>
                            <span />
                            <span />
                        </AddList>
                        <GroupWatch>
                            <div>
                                <img src='/images/group-icon.png' alt='' />
                            </div>
                        </GroupWatch>
                    </Controls>
                    <Subtitle>
                        {detail.subTitle}
                    </Subtitle>
                    <Description>
                        {detail.description}
                    </Description>
                </ContentMeta>
           
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
            width: initial;

        }
    }
`;

const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    @media (max-width: 760px){
        height: 55vw;
        width: 100vw;
    }

    img{
        max-width: 400px;
        min-width: 250px;
        width: 25vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px
`;

const Player = styled.button`
    font-size: 18px;
    margin: 0px 25px 0px 0px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    height: 55px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: black;
    background: rgb(249,249,249);

    img{
        width: 32px
    }

    &:hover{
        background: rgb(198,198,198)
    }

    @media (max-width: 760px){
        height: 45px;
        font-size: 12px;
        padding: 0px 15px;
        margin: 0px 15px 0px 0px;

        img{
            width: 25px
        }
    }
`;

const Trailer = styled(Player)`
    background: rgb(0,0,0, 0.3);
    color: white;
    border: 1px solid rgb(249,249,249);

    &:hover{
        background: rgb(150,150,150, 0.5);
        border: 1px solid rgb(198,198,198);
    }
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    background-color: rgb(0,0,0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span{
        background-color: rgb(249,249,249);
        display: inline-block;

        &:first-child{
            height: 2px;
            width: 16px;
            transform: translate(1px, 0px) rotate(0deg);
        }

        &:nth-child(2) {
            height: 16px;
            width: 2px;
            transform: translateX(-8px) rotate(0deg)
        }
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    div{
        height: 44px;
        width: 44px;
        background-color: rgb(0,0,0);
        border-radius: 50%;
        border: 2px solid white;

        img{
            width: 100%;
        }
    }
`;

const Subtitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    
    @media (max-width: 760px){
        font-size: 12px;
    }
    `;
    
const Description = styled.div`
    font-size: 20px;
    color: rgb(249,249,249);
    min-height: 20px;
    line-height: 1.4;
    padding: 15px 0px;

    @media (max-width: 760px){
        font-size: 14px;
    }
`;

export default Detail;