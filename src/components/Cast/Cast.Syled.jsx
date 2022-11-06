import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin: 10px auto;
`;

export const ListItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Avatr = styled.img`
  width: 100%;
  height: 300px;
`;

export const AccentTitle = styled.span`
  font-weight: 700;
`;

export const InfoText = styled.p`
  display: block;
  font-weight: 400;
  font-size: 12px;
  padding: 1px;
`;
