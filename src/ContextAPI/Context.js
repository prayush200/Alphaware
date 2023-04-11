import { createContext, useReducer } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {

  const reducer = (state, action) => {
    switch (action.type) {
      // case "ADD":
      //   const tempstate = state.filter((item) => action.payload.id === item.id);
      //   if (tempstate.length > 0) {
      //     return state;
      //   } else {
      //     return [...state, action.payload];
      //   }

      case "ADD":
        return [...state,action.payload]
     
      case "INCREASE":
        const tempstate1 = state.map((data) => {
          if (data._id === action.payload._id) {
            return { ...data, quantity: data.quantity+1 };
          } else {
            return data;
          }
        });
        return tempstate1;
      case "DECREASE":
        const tempstate2 = state.map((data) => {
          if (data._id === action.payload._id) {
            return { ...data, quantity: data.quantity-1 };
          } else {
            return data;
          }
        });
        return tempstate2;
      case "REMOVE":
        const tempstate3 = state.filter(
          (data) =>data._id!== action.payload._id
        );

        return tempstate3;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info} >{props.children}</Cartcontext.Provider>
  );
};