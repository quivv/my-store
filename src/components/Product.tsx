import React from 'react'
import { NavLink } from 'react-router-dom'
import { DATA } from '../Data'
import format from '../format'
import { ProductType } from '../Type'
import {GotoTop} from './'

export function Product(): React.ReactElement {
  const CartItem: React.FC<ProductType> = (item) => {
    return (
      <div className="card mx-3 my-3" style={{width: "18rem"}} key={item.id}>
        <img src={item.img} className="card-img-top my-4" alt={item.title}/>
        <div className="card-body text-center">
          <h5 className="card-title">{item.title.substring(0,18)}</h5>
          <div className="lead my-2">{format(item.price)}</div>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary my-2">Buy Now</NavLink>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ms-2">
          {DATA.map(CartItem)}
        </div>
      </div>
      <GotoTop/>
    </>
  )
}
