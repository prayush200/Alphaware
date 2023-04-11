/** @format */

import { useContext } from "react";
import { Cartcontext } from "../ContextAPI/Context";
import '../styles/cart.css'

const Cart = ({props}) => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, data) => {
    return total + data.price * data.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.map((data, index) => {
        
        return (
          <div className="card" key={index}>
            <img src={data.imageUrl} alt="" />
            <p>{data.name}</p>
            <p>{data.quantity * data.price} ₹</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: data })}>
                +
              </button>
              <p>{data.quantity}</p>
              <button
                onClick={() => {
                  if (data.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: data });
                  } else {
                    dispatch({ type: "REMOVE", payload: data });
                  }
                }}>
                -
              </button>
            </div>
            <h2  onClick={() => dispatch({ type: "REMOVE", payload: data })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>TOTAL :  ₹{total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;