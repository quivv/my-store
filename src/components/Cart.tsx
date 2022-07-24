import React from 'react';
import { useDispatch } from 'react-redux';
import { useCartContext } from '../hooks/useCartContext';
import { ProductType } from '../Type';
import format from '../format';
import { delItem } from '../redux/actions';

export function Cart(): React.ReactElement {
    const { cardList } = useCartContext();
    const dispatch = useDispatch();

    const handleClose = (Item: ProductType) => {
        return dispatch(delItem(Item));
    };

    const handleCartItems: React.FC<ProductType> = (cartitem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartitem.id}>
                <div className="container py-4">
                    <button
                        className="btn btn-close float-end"
                        aria-label="Close"
                        onClick={() => handleClose(cartitem)}
                    ></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartitem.img} alt={cartitem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartitem.title}</h3>
                            <p className="lead fw-bold">{format(cartitem.price)}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const cartEmpty = () => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3">
                    <div className="container py-4">
                        <div className="row">
                            <h3>Your Cart is Empty</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            {cardList.length === 0 && cartEmpty()}
            {cardList.length !== 0 && cardList.map(handleCartItems)}
        </>
    );
}
