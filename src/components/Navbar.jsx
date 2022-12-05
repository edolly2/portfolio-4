import styled from 'styled-components';
import Logo from '../assets/my-logo.png';
import { CgMenuGridO } from 'react-icons/cg';


const NavWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;
`;

const SiteBrandWrapper = styled.div`
display: flex;
`;

const SiteBrand = styled.img`
width: calc(4rem + 1.5vw);
height: auto;
`;


const Navbar = (props) => {
  return (
    <NavWrapper>
      <SiteBrandWrapper>
        <SiteBrand src={Logo} alt='Logo with the letters E and D' />
      </SiteBrandWrapper>
      <CgMenuGridO className='icon menu-icon' onClick={props.onMenuClick} />
    </NavWrapper>
  )
}

export default Navbar