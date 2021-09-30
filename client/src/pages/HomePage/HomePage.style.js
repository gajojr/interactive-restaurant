import styled from 'styled-components';

export const HomePageContainer = styled.main `
  background-color: #3d7edc;
  clip-path: ellipse(54% 100% at 54% 0%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 761px) {
    clip-path: none;
  }
`;