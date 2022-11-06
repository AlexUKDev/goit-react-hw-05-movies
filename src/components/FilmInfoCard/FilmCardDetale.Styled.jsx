import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  width: 100%;
`;
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0px 15px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AccentText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
