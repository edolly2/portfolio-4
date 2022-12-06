import Card from '../components/Card';
import Button from '../components/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HomePageWrapper = styled.div`
  /* overflow: hidden; */
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
    <HomePageWrapper className='page home-page'>
      <div>
        <h1>
          <span className='primary-text'>Web</span>
          <span className='white-text'>Developer</span>
        </h1>
      </div>
      <Card />
      <HomeBtnGroup>
        <NavLink to='/projects'>
          <Button text='EXPLORE' color='primary' />
        </NavLink>
        <NavLink to='/contact'>
          <Button text='CONTACT' color='panic' />
        </NavLink>
      </HomeBtnGroup>
    </HomePageWrapper>
  );
};

export default HomePage;
