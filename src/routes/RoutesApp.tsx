import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from '~/pages/Login/Login';
import Dashboard from '~/pages/Dashboard/Dashboard';
import HeroSelector from '~/components/HeroSelector/HeroSelector';

const RoutesApp = () => (
  <Router>
    <Routes>
      <Route path={'login'} element={<Login />} />
      <Route path={'/'} element={<Navigate to={'/login'} />} />
      <Route path={'dashboard'} element={<Dashboard />}>
        <Route path={'/dashboard'} element={<Navigate to={'/dashboard/home'} />} />
        <Route path={'home'} element={<HeroSelector />} />
        <Route path={'perfil'} element={<h1>ESTAMOS NA ROTA PERFIL</h1>} />
        <Route path={'*'} element={<Navigate to={'/login'} />} />
      </Route>
      <Route path={'*'} element={<Navigate to={'/login'} />} />
    </Routes>
  </Router>
);
export default RoutesApp;