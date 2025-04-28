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
import WelcomePage from './pages/WelcomePage';

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
      path: '/user',
      element: <LoginLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/user',
          element: <LoginPage />
        },
        {
          path: '/user/signup',
          element: <SignupPage />
        },
        {
          path: '/user/:email',
          element: <WelcomePage />,
        }
      ]
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
