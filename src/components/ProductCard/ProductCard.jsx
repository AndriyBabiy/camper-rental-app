import React, { useState } from 'react';
import {
  CardImageContainer,
  CardInfo,
  CardSupportText,
  CardTitleText,
  FavoriteButton,
  Image,
  InfoTitle,
  Price,
  ProductCardBlock,
  SubTitleComponent,
  TitleBottom,
  TitleTop,
  TitleTopAdditionalElems,
} from './ProductCard.styled';
import {
  CardDetailIcons,
  DetailIcons,
} from 'components/DetailIcons/DetailIcons';
import { MainButton } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import HeartIcon from '../../styles/Icons/heart.svg';
import HeartFilledIcon from '../../styles/Icons/heart-filled.svg';
import Star from '../../styles/Icons/star.svg';
import LocationMarker from '../../styles/Icons/location-marker.svg';
import { Modal } from 'components/Modal/Modal';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(fav => fav._id === product._id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    adults,
    // children,
    // consumption,
    description,
    details,
    engine,
    // form,
    gallery,
    // height,
    // length,
    location,
    name,
    price,
    rating,
    reviews,
    // tank,
    transmission,
    // width,
  } = product;

  const characteristicsModal = {
    adults,
    transmission,
    airConditioner: details.airConditioner,
    engine,
    kitchen: details.kitchen,
    beds: details.beds,
    CD: details.CD,
    radio: details.radio,
    hob: details.hob,
  };

  const handleShowMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <ProductCardBlock>
      <CardImageContainer
        src={gallery ? gallery[0] : undefined}
        alt={`${name} camper van`}
      />
      <CardInfo>
        <InfoTitle>
          <TitleTop>
            <CardTitleText>{name}</CardTitleText>
            <TitleTopAdditionalElems>
              <CardTitleText>${price}</CardTitleText>
              <FavoriteButton onClick={handleFavorite}>
                <img
                  src={isFavorite ? HeartFilledIcon : HeartIcon}
                  alt="favorite"
                />
              </FavoriteButton>
            </TitleTopAdditionalElems>
          </TitleTop>
          <TitleBottom>
            <SubTitleComponent>
              <img src={Star} alt="star" />
              {rating && rating} ({reviews && reviews.length} reviews)
            </SubTitleComponent>
            <SubTitleComponent>
              <img src={LocationMarker} alt="location marker" />
              {location}
            </SubTitleComponent>
          </TitleBottom>
        </InfoTitle>
        <CardSupportText>{description}</CardSupportText>
        <CardDetailIcons
          adults={adults}
          transmission={transmission}
          engine={engine}
          kitchen={details.kitchen}
          beds={details.beds}
          airConditioner={details.airConditioner}
        />
        <MainButton />
      </CardInfo>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{name}</h2>
        <Image src={product.imageUrl} alt={name} />
        <p>{description}</p>
        <CardDetailIcons {...characteristicsModal} />
        <Price>€{price}</Price>
      </Modal>
    </ProductCardBlock>
  );
};
