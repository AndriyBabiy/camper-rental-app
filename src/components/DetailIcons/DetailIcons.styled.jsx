import styled from 'styled-components';

export const DetailIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const DetailIconComponent = styled.div`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  gap: 8px;

  border-radius: 100px;
  background: #f2f4f7;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 18px;
  background-color: #f3f4f6;
  border-radius: 100px;
  font-size: 14px;
  color: #374151;

  svg {
    width: 20px;
    height: 20px;
  }
`;
