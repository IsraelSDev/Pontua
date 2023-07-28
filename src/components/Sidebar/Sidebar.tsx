import logoPontua from '~/assets/logo/logo_pontua_dark.svg';
import iconHome from '~/assets/icons/dashboard.svg';
import iconPerfil from '~/assets/icons/perfil.svg';
import iconSair from '~/assets/icons/corner-up-left.svg';
import './sidebar.scss';
import { Link, useRoutes } from 'react-router-dom';
import { usePageContext } from '~/store/PageContext';
import { useEffect } from 'react';

const Sidebar = () => {
  const boolea = true;
  const { currentPage, handleCurrentPage } = usePageContext();

  return (
    <>
      <div className={'sidebar d-flex flex-column'}>
        <div className={'row'}>
          <Link to={'/dashboard/home'}>
            <div className={'col-12 col-logo line-end'}>
              <img src={logoPontua} />
            </div>
          </Link>
        </div>
        <div className={'row d-flex flex-column col-nav line-end'}>
          <Link to={'/dashboard/home'} onClick={() => handleCurrentPage('home')}>
            <div className={'col-12 d-flex'}>
              <img src={iconHome} /> <p>Home</p>
            </div>
          </Link>
          <Link to={'/dashboard/perfil'} onClick={() => handleCurrentPage('perfil')}>
            <div className={'col-12 d-flex pt-4'}>
              <img src={iconPerfil} /> <p>Perfil</p>
            </div>
          </Link>
        </div>
        <div className={'row'}>
          <Link to={'/login'}>
            <div className={'col-12 d-flex line-end  col-end'}>
              <img src={iconSair} /> <p>Sair</p>
              <p>PATH: {currentPage}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
