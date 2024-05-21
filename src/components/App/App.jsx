import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from 'pages/ProductsPage';
import { Homepage } from 'pages/Homepage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};
