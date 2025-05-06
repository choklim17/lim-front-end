import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginLayout from './components/LoginLayout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashLayout from './components/DashLayout';
import DashboardPage from './pages/DashboardPages/DashboardPage';
import UsersPage from './pages/DashboardPages/UsersPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';

function App() {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/articles',
          element: <ArticleListPage />
        },
        {
          path: '/articles/:name',
          element: <ArticlePage />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '',
          element: <LoginPage />
        },
      ]
    },
    {
      path: '/register',
      element: <LoginLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '',
          element: <SignupPage />
        },
      ]
    },
    {
      path: '/dashboard',
      element: <DashLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '',
          element: <DashboardPage />
        },
        {
          path: 'users',
          element: <UsersPage />
        },
        {
          path: 'reports',
          element: <ReportsPage />
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
