import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #c6c2c5;
  opacity: 0.9;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  padding-left: 32px;
  border-radius: 10px;
  border: none;
  outline: 2px solid #a8a4a7;
`;

export const Button = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
`;
