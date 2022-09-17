import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";
import { PaymentFromContainer, FormContainer, ButtonContainer } from "./payment-form.styles";

const PaymentFrom = () => {
  const stripe = useStripe();
  const element = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());
    console.log(response);
  };
  return (
    <PaymentFromContainer>
      <FormContainer onSubmit={paymentHandler}>
        {/* <FormContainer > */}
        <h2>Credit Cart Payment: </h2>
        <CardElement />
        <ButtonContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
        </ButtonContainer>
      </FormContainer>
    </PaymentFromContainer>
  );
};

export default PaymentFrom;
