import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/login';
import { Contacts } from 'pages/contacts';
import { Register } from 'pages/register';
import { Nav } from './Nav/nav';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
