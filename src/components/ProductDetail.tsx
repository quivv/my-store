import React from 'react'
import { useParams } from 'react-router'
import { DATA } from '../Data';
import format from '../format';
import { ProductType } from '../Type';

const ProductDetail = () => {
  const {id} = useParams<string>();  
  const proDetail: ProductType[] = DATA.filter(x => x.id.toString() === id)
  const product:ProductType = proDetail[0]

  return (
    <>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="fw-bold display-5">{product.title}</h1>
            <hr/>
            <h2 className="my-4">{format(product.price)} VNĐ</h2>
            <p className="lead">{product.desc}</p>
            <button className="btn btn-outline-primary my-5">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail