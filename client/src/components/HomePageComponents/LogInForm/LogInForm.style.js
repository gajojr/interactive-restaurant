import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogInForm = styled.form `
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label `
  margin: 5px;
`;

export const Input = styled.input `
  margin: 5px;
  padding: 5px;
  border: 2px solid #0099ff;
  border-radius: 10px;
  
  &:focus {
    outline: none;
    border: 2px solid #007acc;
  }
`;

export const Button = styled.button `
  background-color: #1A73E8;
  font-weight: 600;
  color: #fff;
  width: fit-content;
  align-self: center;
  padding: 10px;
  border: none;
  border-radius: 5px;
  transition: all .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const StyledLink = styled(Link)
`
  color: #fff;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;