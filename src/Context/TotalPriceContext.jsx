import { createContext, useContext, useReducer } from "react";

const totalPriceContext = createContext(null);

const totalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        totalPrice: action.payload.totalPrice,
      };
    }
    default: {
      throw Error("Unknown action", action.type);
    }
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, {totalPrice: 0});

  return (
    <totalPriceContext.Provider value={totalPrice}>
      <totalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </totalPriceDispatchContext.Provider>
    </totalPriceContext.Provider>
  );
};

export function useTotalPrice() {
  return useContext(totalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(totalPriceDispatchContext);
};
