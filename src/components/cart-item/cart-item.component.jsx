import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={`${imageUrl}`} alt={`${name}`} />
      <CartItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
