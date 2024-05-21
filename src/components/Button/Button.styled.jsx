import styled from 'styled-components';
import { theme } from 'styles';

export const ButtonBody = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${theme.colors.white};

  border-radius: 200px;
  background: ${theme.colors.accent};
  align-self: flex-start;
`;
