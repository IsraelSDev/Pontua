import logoPontua from '~/assets/logo/logo_pontua_dark.svg';
import iconHomeRed from '~/assets/icons/dashboard-red.svg';
import iconPerfilBlack from '~/assets/icons/perfil-black.svg';
import iconHomeBlack from '~/assets/icons/dashboard-black.svg';
import iconPerfilRed from '~/assets/icons/perfil-red.svg';
import iconSair from '~/assets/icons/corner-up-left.svg';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { usePageContext } from '~/store/PageContext';

const Sidebar = () => {
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
            <div className={'col-12 d-flex '}>
              <img src={currentPage.includes('home') ? iconHomeRed : iconHomeBlack} />{' '}
              <p className={currentPage.includes('home') ? 'active' : ''}>Home</p>
            </div>
          </Link>
          <Link to={'/dashboard/perfil'} onClick={() => handleCurrentPage('perfil')}>
            <div className={'col-12 d-flex pt-4'}>
              <img src={currentPage.includes('perfil') ? iconPerfilRed : iconPerfilBlack} />{' '}
              <p className={currentPage.includes('perfil') ? 'active' : ''}>Perfil</p>
            </div>
          </Link>
        </div>
        <div className={'row'}>
          <Link to={'/login'}>
            <div className={'col-12 d-flex line-end  col-end'}>
              <img src={iconSair} /> <p>Sair</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
