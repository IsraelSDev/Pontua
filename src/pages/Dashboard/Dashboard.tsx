import Sidebar from '~/components/Sidebar/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import './dashboard.scss';
import { usePageContext } from '~/store/PageContext';
import { useEffect } from 'react';

const Dashboard = () => {
  const { hero } = usePageContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(hero);
    if (Object.keys(hero).length === 0) {
      navigate('/login');
    }
  }, []);

  return (
    <div className={'d-flex'}>
      <aside>
        <Sidebar />
      </aside>
      <div className={'outlet'}>
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
