import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 98vw;
  margin: 10px auto;

  list-style: none;
`;

export const ListItem = styled.li`
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 5px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Author = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Data = styled.p`
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-left: 5px;
`;
