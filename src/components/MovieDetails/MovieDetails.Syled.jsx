import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h3`
  padding-left: 15px;
  font-weight: 700;
`;

export const Box = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Links = styled.ul`
  padding: 10px;
  margin-left: 30px;
  list-style: none;
`;

export const LinkItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const NavLinkItem = styled(NavLink)`
  display: flex;
  align-items: center;

  width: 100px;
  padding: 1px 8px;

  color: black;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 400;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &.active {
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
