import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const BoxList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  color: black;
  font-size: 15px;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 4px;
  &:hover {
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
