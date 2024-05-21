import { Navbar } from 'components/Navbar/Navbar';
import { Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
