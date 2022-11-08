import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.header`
  display: grid;
  grid-template-columns: 100wh 1fr;
`;

export const NavWrap = styled.nav`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
  padding-left: 30px;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.3);
`;

export const NavLinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  width: 75px;
  text-decoration: none;
  color: black;
  border-radius: 8px;
  font-weight: 600;
  border-color: #ed7230;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &.active {
    background-color: #54b95f;
    color: white;
    scale: 0.995;
  }
`;
