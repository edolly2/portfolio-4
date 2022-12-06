import React from 'react';
import styled from 'styled-components';

const ProjectsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 769px) {
  }
`;

const ProjectsPage = () => {
  return <ProjectsPageWrapper>ProjectsPage</ProjectsPageWrapper>;
};

export default ProjectsPage;
