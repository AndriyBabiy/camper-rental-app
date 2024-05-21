import { ProductCard } from 'components/ProductCard/ProductCard';
import { ProductCardsSection } from './ProductCards.styled';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../redux/selectors';

export const ProductCards = () => {
  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <ProductCardsSection>
      {filteredProducts.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ProductCardsSection>
  );
};
