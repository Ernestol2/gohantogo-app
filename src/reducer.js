export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_BASKET: "SET_BASKET",
};

export const getTotal = (basket) => {
  return basket?.reduce((acc, item) => item.price * item.quantity + acc, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id);
        
      if (itemIndex >= 0) {
        const updatedBasket = [...state.basket]
        updatedBasket[itemIndex].quantity = action.item.quantity
        return {
            ...state,
            basket: updatedBasket,
        }
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }
    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("no se pudo remover el producto");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_BASKET":
        return {
        ...state,
        basket: action.basket,
        }
    default:
      return state;
  }
};

export default reducer;
