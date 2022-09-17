import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  min-width: 40px;
  min-height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


export const ShoppingIcon = styled(ShoppingSvg)`
  width: 35px;
  height: 35px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 5px;
`;

/* .cart-icon-container {
    min-width: 40px;
    min-height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
    .shopping-icon {
      width: 24px;
      height: 24px;
    }
  
    .item-count {
      position: absolute;
      font-size: 15px;
      font-weight: bold;
      bottom: 5px;
    }
  } */
