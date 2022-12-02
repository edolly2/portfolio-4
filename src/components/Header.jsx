import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderWrapper = styled.div`
  width: 100%;
  /* margin-bottom: 2.4rem; */
  /* display: flex; */
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
