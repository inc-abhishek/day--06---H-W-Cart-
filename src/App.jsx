import { useReducer, useState } from "react";
import Cart from "./components/Cart";
import Product from "./components/Product";


const intialState = {
  product: [
    { id: 1, name: "Product-1", price: 100, quantily: 0 },
    { id: 2, name: "Product-2", price: 200, quantily: 0 },
    { id: 3, name: "Product-3", price: 300, quantily: 0 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        product: state.product.map((value) => {
          if (value.id === action.payload.id) {
            return {
              ...value,
              quantily: value.quantily + 1,
            };
          } else {
            return value;
          }
        }),
      };
      case "sub":
        return {
          ...state,
          product: state.product.map((value) => {
            if (value.id === action.payload.id && value.quantily > 0 ) {
              return {
                ...value,
                quantily: value.quantily - 1,
              };
            } else {
              return value;
            }
          }),
        };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(state.product);
  // console.log(state.cart);
  return (
    <>
      <div className="mt-5 flex gap-8 justify-center">
        <Product product={state.product} dispatch={dispatch} />
        <Cart product={state.product} dispatch={dispatch}/>
      </div>
    </>
  );
}

export default App;