import React, { useState } from 'react';
import { useParams } from 'react-router';
import { DATA } from '../Data';
import format from '../format';
import { ProductType } from '../Type';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions';

export function ProductDetail(): React.ReactElement {
    const [cartBtn, setCartBtn] = useState<string>('Add to Cart');
    const { id } = useParams<string>();
    const proDetail: ProductType[] = DATA.filter((x) => x.id.toString() === id);
    const product: ProductType = proDetail[0];

    const disPatch = useDispatch();
    const handleCart = (product: ProductType) => {
        if (cartBtn === 'Add to Cart') {
            disPatch(addItem(product));
            setCartBtn('Remove from Cart');
        } else {
            disPatch(delItem(product));
            setCartBtn('Add to Cart');
        }
    };

    return (
        <>
            <div className="container py-4 my-4">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="fw-bold display-5">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">{format(product.price)} VNĐ</h2>
                        <p className="lead">{product.desc}</p>
                        <button className="btn btn-outline-primary my-5" onClick={() => handleCart(product)}>
                            {cartBtn}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
