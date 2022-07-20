import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <NavLink to="/cart" className='btn btn-outline-primary ms-1'>
        <span className='fa fa-shopping-cart me-1'>Cart (0)</span>
      </NavLink>
    </>
  )
}

export default Cart