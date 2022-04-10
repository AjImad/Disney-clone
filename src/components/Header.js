import styled from 'styled-components';

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src='/images/logo.svg' alt="Disney+" />
            </Logo>
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
    letter-spacing: 1.5px
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    font-size: 0;
    display: inline-block;
    max-height: 70px;
    margin-top: 4px;
    &:hover{
        cursor: pointer
    }
    img{
        display: block;
        width: 100%
    }
`;

export default Header;