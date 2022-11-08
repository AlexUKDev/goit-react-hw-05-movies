import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  margin: 20px 0px 20px 0px;

  width: 400px;
  height: 30px;
  padding: 5px;
  border: 1px solid #54b95f;
  border-radius: 0px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 18px;

  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid #479e50;
  }

  /* Remuve default styles */
  &:focus-visible {
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  height: 42px;
  width: 50px;
  margin-left: 20px;
  padding: 5px;
  background-color: #479e50;
  border: 1px solid transparent;
  color: white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #54b95f;
  }
`;
