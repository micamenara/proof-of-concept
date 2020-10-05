import FilesSection from './pages/FilesSection';
import UserSection from './pages/UserSection';

const routes = [
  {
    path: '/',
    component: FilesSection,
    exact: true,
  },
  {
    path: '/profile',
    component: UserSection,
    exact: true,
  },
];

export default routes;
