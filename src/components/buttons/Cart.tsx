import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../hooks/useCartContext';

export function Cart(): React.ReactElement {
  const { cardList } = useCartContext();
  return (
    <>
      <NavLink to="/cart" className='btn btn-outline-primary ms-1'>
        <span className='fa fa-shopping-cart me-1'>Cart ({cardList.length})</span>
      </NavLink>
    </>
  )
}