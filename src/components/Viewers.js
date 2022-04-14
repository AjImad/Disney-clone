import styled from 'styled-components';

const Viewers = (props) => {
    return (
       <Container>
           <div>1</div>
           <div>2</div>
           <div>3</div>
           <div>4</div>
           <div>5</div>
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
`;

export default Viewers;