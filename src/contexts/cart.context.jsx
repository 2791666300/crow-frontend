import { createContext, useReducer } from "react";


import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  clearItemFromCart: () => null,
  removeItemToCart: () => null,
  cartTotal: 0,
});

// 1. 添加 #FF0000
const addCartItem = (cartItems, productToAdd) => {
  // 1) 查找Cartitems是否包含productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // 2) 如果有，增加 quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  // 3) 返回修改后的cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// 2. 减少 #FF0000
const removeCartItem = (cartItems, cartItemToRemove) => {
  // 1) 查找要删除的
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // 2) 检查quantity是否等于1，则删除该项目
  if (existingCartItem.quantity === 1) {
    // 过滤掉cartItem.id 不等于 cartItemToRemove.id 的数据，并返回过滤掉的数据
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // 3) quantity 大于1的情况下 数量减1
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

// 3. 去除 #FF0000
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// action type 将要发生的动作类型
const CART_ACTION_TYPES = {
  SET_INCARTOPEN: "SET_INCARTOPEN",
  SET_CARTITEMS: "SET_CARTITEMS",
};

// 初始值
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// reducer 操作
export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_INCARTOPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CARTITEMS:
      return {
        ...state,
        ...payload,
        // cartItems: payload,
        // cartCount: payload.reduce(
        //   (total, cartItem) => total + cartItem.quantity,
        //   0
        // ),
        // cartTotal: payload.reduce(
        //   (total, cartItem) => total + cartItem.price * cartItem.quantity,
        //   0
        // ),
      };

    default:
      throw new Error(`没有${type}类型的action`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (bool) => {
    // dispatch({ type: CART_ACTION_TYPES.SET_INCARTOPEN, payload: bool });
    dispatch(createAction(CART_ACTION_TYPES.SET_INCARTOPEN, bool))
  };

  const updateCartItemsReducer = (cartItems) => {
    return {
      cartItems: cartItems,
      cartCount: cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      ),
      cartTotal: cartItems.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      ),
    };
  };

  const setCartItems = (cartitems) => {
    // dispatch({
    //   type: CART_ACTION_TYPES.SET_CARTITEMS,
    //   payload: updateCartItemsReducer(cartitems),
    // });
    dispatch(createAction(CART_ACTION_TYPES.SET_CARTITEMS, updateCartItemsReducer(cartitems)))
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
