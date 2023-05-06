import React, { createContext, useContext, useReducer, useEffect } from "react";

const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save the basket to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  // Retrieve the basket from local storage when the component mounts
  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      dispatch({
        type: "SET_BASKET",
        basket: JSON.parse(savedBasket),
      });
    }
  }, []);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue };
