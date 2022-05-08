import React from 'react'

import { Product, FooterBanner, HeroBanner}
from '../components'

export const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Helmets Ever</h2>
        <p>Come here and take it</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner/>
    </>
  )
}

export default Home;
