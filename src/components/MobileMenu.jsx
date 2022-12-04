import styled from 'styled-components'

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
          <MobileNavListItem>HOME</MobileNavListItem>
          <MobileNavListItem>ABOUT</MobileNavListItem>
          <MobileNavListItem>SKILLS</MobileNavListItem>
          <MobileNavListItem>PROJECTS</MobileNavListItem>
          <MobileNavListItem>CONTACT</MobileNavListItem>
          <MobileNavListItem>BLOG</MobileNavListItem>
        </MobileNavList>
      </MobileNav>
    </MobileMenuWrapper>
  )
}

export default MobileMenu