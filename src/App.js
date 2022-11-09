import React, {useEffect, useState} from 'react';
import './App.css';
import Card from "./components/Card";
import {useDispatch, useSelector} from "react-redux";
import {addOrder, addToCartAction, getMenu, selectMenu, selectOrders,} from "./features/menu/menuSlice";
import Basket from "./components/Basket";

function App() {
    const dispatch = useDispatch();
    const menu = useSelector(selectMenu);
    const orders = useSelector(selectOrders)
    const addToCart = (item) => {
        dispatch(addToCartAction(item))
    };

    const createOrder = () => {
        dispatch(addOrder(orders))
    }

    useEffect(()=>{
        dispatch(getMenu());
    },[dispatch]);
  return (
    <div className = 'container-sm pt-5'>
      <div className = 'd-flex justify-content-between mb-5'>
          {
              menu.map((item, i) => {
                  return <Card onClick={()=>addToCart(item)} key={i} image={item.image} price={item.price} title={item.title}/>
              })
          }
      </div>
        <Basket orders={[]} onClick={createOrder}/>
    </div>
  );
}

export default App;
