import { PageBody } from 'components/App/App.styled';
import { FilterSection } from 'components/FilterSection/FilterSection';
import { ProductCards } from 'components/ProductCards/ProductCards';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <PageBody>
      <FilterSection />
      {isLoading && !error ? <p>Loading products...</p> : <ProductCards />}
    </PageBody>
  );
};
