import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0px 0px 25px;
`;

export const Title = styled.h1`
  margin: 0px 0px 20px 0px;
  padding: 0;
  font-size: 30px;
`;

export const BoxList = styled.ul`
  margin: 0;
  padding: 0;
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
