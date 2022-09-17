import styled from "styled-components";

export const PaymentFromContainer = styled.div`
  height: 300px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 100%;
  
`;

export const ButtonContainer = styled.div`
  button {
    margin-top: 20px;
    width: 40%;
    margin-left: auto;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`