import styled from 'styled-components'

const Login = () => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImg />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BgImg = styled.div`
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 480px){
        width: 85%
    }
    @media only screen and (min-width: 380px){
        width: 85%
    }
`;


const CTALogoOne = styled.img`
    width: 100%;
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    &:hover{
        opacity: 0.8;
    };
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 14px;
    font-size: 18px;
    letter-spacing: 1.5px;
    padding: 16.5px;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee;
        cursor: pointer
    }
    width: 100%
`;

const Description = styled.p`
    color: #f9f9f9;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    margin: 0 0 24px
`;

const CTALogoTwo = styled.img`
    width: 100%;
    display: inline-block;
    margin-bottom: 20px
`;

export default Login;