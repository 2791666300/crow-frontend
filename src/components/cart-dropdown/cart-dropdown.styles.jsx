import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  position: absolute;
  top: 60px;
  left: 60px;
  color: green;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

/* 
.cart-dropdown-container {
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
  
    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      
    }
  
    button {
      margin-top: auto;
    }
  }
   */
