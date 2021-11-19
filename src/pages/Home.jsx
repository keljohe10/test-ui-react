import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Layout/navbar/Navbar';
import Header from '../components/Layout/header/Header';
import Footer from '../components/Layout/footer/Footer';
import BannerTop from '../components/Layout/aside/BannerTop';
import BennerBottom from '../components/Layout/aside/BennerBottom';
import Main from '../components/Layout/main/Main';
import CardsContainer from '../components/cards/CardsContainer';
import getCelebrities from '../features/celebrities/celebritiesThunk';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCelebrities('/celebrities'));
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <div className="max-centered">
        <BannerTop />
        <Main>
          <CardsContainer />
        </Main>
        <BennerBottom />
        <hr role="separator" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
