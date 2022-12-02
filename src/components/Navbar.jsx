import styled from 'styled-components';
import Logo from '../assets/my-logo.png';
import { CgMenuGridO } from 'react-icons/cg';


const NavWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const SiteBrandWrapper = styled.div``;

const SiteBrand = styled.img`
width: 4rem;
height: auto;
`;


const Navbar = () => {
  return (
    <NavWrapper>
      <SiteBrandWrapper>
        <SiteBrand src={Logo} alt='Logo with the letters E and D' />
      </SiteBrandWrapper>
      <CgMenuGridO className='icon menu-icon' />
    </NavWrapper>
  )
}

export default Navbar