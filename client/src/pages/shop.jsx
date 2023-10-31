import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollection from '../components/NewCollection/NewCollection';
import NewsLetter from '../components/Newsletter/NewsLetter';

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
    </div>
  )
}

export default Shop;