import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  Overlay,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <HeroContent>
        <HeroTitle>Welcome to CamperRental</HeroTitle>
        <HeroSubtitle>
          Find the perfect camper for your next adventure.
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};
