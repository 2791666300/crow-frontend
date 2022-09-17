import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";
import { PaymentFromContainer, FormContainer } from "./payment-form.styles";

const PaymentFrom = () => {
  const stripe = useStripe()
  const element = useElements()
  
  return (
    <PaymentFromContainer>
      <FormContainer>
        <h2>Credit Cart Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFromContainer>
  );
};

export default PaymentFrom;
