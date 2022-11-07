import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  margin: 20px 0px 20px 20px;

  width: 400px;
  height: 30px;
  padding: 5px;
  border: 1px solid #54b95f;
  border-radius: 8px;

  &:hover,
  &:focus,
  &:focus-visible {
    border: 2px solid #479e50;
  }

  /* Remuve default styles */
  &:focus-visible {
    outline: none;
  }
`;
