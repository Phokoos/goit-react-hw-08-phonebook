import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/login';
import { Contacts } from 'pages/contacts';
import { Register } from 'pages/register';
import { Nav } from './Nav/nav';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
