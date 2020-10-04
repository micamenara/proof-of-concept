import FilesSection from './pages/FilesSection';
import UserSection from './pages/UserSection';

const routes = [
  {
    path: '/',
    component: FilesSection,
    exact: true,
    userLogged: false,
  },
  {
    path: '/profile',
    component: UserSection,
    exact: true,
    userLogged: true
  },
];

export default routes;
