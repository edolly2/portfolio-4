import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderWrapper = styled.div`
  width: 100%;
  /* height: 4rem; */
  /* margin-bottom: 2.4rem; */
  display: flex;
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
