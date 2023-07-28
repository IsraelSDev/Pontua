import Sidebar from '~/components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './dashboard.scss';

const Dashboard = () => (
  <>
    <div className={'d-flex'}>
      <aside>
        <Sidebar />
      </aside>
      <div className={'outlet'}>
        <Outlet />
      </div>
    </div>
  </>
);
export default Dashboard;