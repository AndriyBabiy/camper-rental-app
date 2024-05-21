import styled from 'styled-components';

export const HeroContainer = styled.div`
  height: 100vh;
  background-image: url('../../styles/Images/camper-hero-image.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 32px;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const HeroSubtitle = styled.p`
  font-size: 24px;
`;
