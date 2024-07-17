import React, { createContext, useContext, useReducer } from "react";

const handlecart = createContext();
const dispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          size: action.size,
          qty: action.qty,
          img: action.img,
        },
      ];

    case "REMOVE":
      const newState = state.filter((item, index) => index !== action.index);
      return newState;

    case "UPDATE":
      const arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + food.qty,
            price: action.price + food.price,
          };
        }
        return arr;
      });
      return arr;

    case "DROP":
      const clearArr = [];
      return clearArr;

    default:
      break;
  }
};

export const CartDetail = ({ children }) => {
  const [initialState, dispatchState] = useReducer(reducer, []);
  return (
    <>
      <dispatch.Provider value={dispatchState}>
        <handlecart.Provider value={initialState}>
          {children}
        </handlecart.Provider>
      </dispatch.Provider>
    </>
  );
};

export const CartUse = () => useContext(handlecart);
export const DispatchUse = () => useContext(dispatch);
