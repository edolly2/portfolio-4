import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MobileMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  background-color: green;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

const MobileNav = styled.nav``;

const MobileNavList = styled.ul``;

const MobileNavListItem = styled.li`
  color: white;
`;

const MobileMenu = (props) => {
  return (
    <MobileMenuWrapper style={props.style}>
      <MobileNav>
        <MobileNavList>
          <MobileNavListItem>
            <NavLink to='/'>HOME</NavLink>
          </MobileNavListItem>
          <MobileNavListItem>
            <NavLink to='/about'>ABOUT</NavLink>
          </MobileNavListItem>
          <MobileNavListItem>
            <NavLink to='/skills'>SKILLS</NavLink>
          </MobileNavListItem>
          <MobileNavListItem>
            <NavLink to='/projects'>PROJECTS</NavLink>
          </MobileNavListItem>
          <MobileNavListItem>CONTACT</MobileNavListItem>
          <MobileNavListItem>BLOG</MobileNavListItem>
        </MobileNavList>
      </MobileNav>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
