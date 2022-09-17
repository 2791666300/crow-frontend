import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  BackgroundImg,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  
  // 页面跳转
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <Fragment>
            <EmptyMessage>购物车空空如也</EmptyMessage>
            <BackgroundImg src="/img/购物车.jpg" />
          </Fragment>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
