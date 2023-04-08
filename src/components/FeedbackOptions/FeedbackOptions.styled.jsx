import styled from 'styled-components';

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
`;

export const Button = styled.button`
  width: 85px;
  height: 30px;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 20px;
  background-color: DodgerBlue;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px BlueViolet;
  }
`;
