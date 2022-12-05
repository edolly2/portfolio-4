import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderWrapper = styled.div`
  max-width: 100vw;
  padding: 1.6rem;
  /* height: 4rem; */
  /* margin-bottom: 2.4rem; */
  display: flex;
  /* position: absolute; */
  /* align-items: center; */
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Navbar onMenuClick={props.onMenuClick} />
    </HeaderWrapper>
  );
};

export default Header;
