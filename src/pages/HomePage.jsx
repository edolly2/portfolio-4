import Card from '../components/Card';
import Button from '../components/Button';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* align-items: center; */
width: 100%;
height: 100vh;
/* margin-top: 20%; */
/* margin-bottom: 50%; */
/* height: calc(100vh - 2.4rem); */
/* padding: 2.4rem; */
@media screen and (min-width: 769px) {
/* margin: 0; */
}
`;

const HomeBtnGroup = styled.div`
display: flex;
justify-content: center;
gap: 2.4rem;
align-items: center;
`;

const HomePage = () => {
  return (
    <HomePageWrapper className='home-page'>
      <Card />
      <HomeBtnGroup>
        <Button text='EXPLORE' color="primary" />
        <Button text='CONTACT' color="panic" />
      </HomeBtnGroup>
    </HomePageWrapper>
  )
}

export default HomePage