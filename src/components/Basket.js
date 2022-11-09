import React from 'react';
import {useSelector} from "react-redux";
import {selectOrders} from "../features/menu/menuSlice";

function Basket({onClick}) {
    const orders = useSelector(selectOrders);
    // console.log(orders)
    return (
        <div className='card w-25 m-auto p-3'>
            {
                orders.map((order, i) => {
                    return(
                <div key={i} className='mb-2 d-flex justify-content-between'>
                <span>{order.title} {order.amount}</span>
                <b>{order.price * order.amount}</b>
                </div>
                )
            })
            }
            <button onClick={onClick} className="btn btn-primary">Place order</button>
        </div>
    );
}

export default Basket;