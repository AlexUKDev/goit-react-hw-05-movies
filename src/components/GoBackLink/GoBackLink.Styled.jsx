import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0px 5px 5px;
  width: 70px;
  height: 20px;
  border-radius: 8px;
  border: 1px solid #ed7230;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ed7230;
    color: white;
    scale: 0.995;
    font-weight: 700;
  }
`;
