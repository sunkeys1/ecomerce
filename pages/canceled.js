import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';
import { runRealistic } from '../lib/utils';


const Canceled = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, []);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
            </p>
            <h2>Something went wrong :(</h2>
            <Link href="/">
                <button type='button' width='300px' className='btn'>
                    To main page
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Canceled