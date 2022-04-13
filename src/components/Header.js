import styled from 'styled-components';
import {auth, provider} from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails} from '../features/user/userSlice';
import { useNavigate }  from 'react-router-dom'

const Header = (props) => {

    const history = useNavigate()
    const dispatch = useDispatch()
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserPhoto)

    const handleAuth = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((e) => {
            alert(e.message)
        })
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            // OUR PAYLOAD
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src='/images/logo.svg' alt="Disney+" />
            </Logo>
            {!username ? 
            <Login onClick={handleAuth}>Login</Login>
            : 
            <>
                <NavManu>
                    <a href="/home">
                        <img src="/images/home-icon.svg" alt="HOME" />
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" alt="SEARCH" />
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="/images/original-icon.svg" alt="ORIGINALS" />
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" alt="MOVIES" />
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" alt="SERIES" />
                        <span>SERIES</span>
                    </a>
                </NavManu>
                <UserImg src={userphoto} alt={username} />
            </>}
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #040714;
    height: 70px;
    padding: 0 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    letter-spacing: 1.5px;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    font-size: 0;
    display: inline-block;
    max-height: 70px;
    margin-top: 4px;
    img{
        display: block;
        width: 100%
    }
`;

const NavManu = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    padding: 0px;
    margin: 0px;
    margin-right: auto;
    margin-left: 25px;
    justify-content: flex-start;
    height: 100%;

    a{
        padding: 0 15px;
        display: flex;
        align-items: center;

        img{
            height: 20px;
            min-width: 24px;
            width: 24px;
            z-index: auto
        }

        span{
            position: relative;
            padding: 2px 2px;
            white-wrap; nowrap;
            color: #f9f9f9;

            &:before{
                background-color: #f9f9f9;
                position: absolute;
                bottom: -6px;
                right: 0px;
                left: 0px;
                content: '';
                height: 2px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                width: auto;
                visibility: hidden;
            }
        }

        &:hover{
            span:before{
                opacity: 1;
                visibility: visible;
                transform: scaleX(1);
            }
        }
    }

    @media (max-width: 768px){
        display: none
    }
`;

const Login = styled.a`
    background-color: rgba(0,0,0,0.5);
    padding: 10px 16px;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .3s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
        cursor: pointer
    }
`;

const UserImg = styled.img`
    height: 60%;
    border-radius: 50%
`;

export default Header;