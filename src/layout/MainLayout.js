import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/action';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className='MainLayout'>
      <div className='MainLayout_Header'>
        <Header />
      </div>
      <div className='MainLayout_Body container'>
        <Outlet />
      </div>
      <div className='MainLayout_Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout