import styled from 'styled-components';

export const ProductCardBlock = styled.div`
  display: flex;
  padding: 24px;
  gap: 24px;

  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const CardImageContainer = styled.img`
  width: 290px;
  height: 310px;
  flex-shrink: 0;

  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  width: 526px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitleText = styled.h1`
  all: unset;
  display: block;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;

  color: #101828;

  /* H1 */
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`;

export const TitleTopAdditionalElems = styled.div`
  display: flex;
  width: 158px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const TitleBottom = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const SubTitleComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const SubTitleText = styled.p`
  color: #101828;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const SubTitleReviewsText = styled.p`
  color: #101828;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;

export const CardSupportText = styled.p`
  overflow: hidden;
  color: #475467;

  text-overflow: ellipsis;
  white-space: nowrap;
  width: 525px;
  /* Main text */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const Image = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;
