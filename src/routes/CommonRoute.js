import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import LoginLayout from '../layout/LoginLayout';
import MainLayout from '../layout/MainLayout';
import Loader from '../components/Loader';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));

const CommonRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/" element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        } />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default CommonRoute;