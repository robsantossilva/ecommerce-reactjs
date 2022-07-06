import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import AddressForm, {
  AddressFormRefComponent,
  AddressData,
} from "../components/AddressForm";
import PaymentForm, {
  PaymentFormRefComponent,
} from "../components/PaymentForm";
import Review from "../components/Review";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function Checkout() {
  const [activeStep, setActiveStep] = useState(1);
  const [addressData, setAddressData] = useState<AddressData>();

  const addressFormRef =
    useRef() as React.MutableRefObject<AddressFormRefComponent>;

  const paymentFormRef =
    useRef() as React.MutableRefObject<PaymentFormRefComponent>;

  const handleNext = () => {
    activeStep === 0 && addressFormRef.current.handleSubmit();
    activeStep === 1 && paymentFormRef.current.handleSubmit();
    // setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && (
                  <AddressForm
                    getAddressData={(data) => {
                      //console.log(data);
                      setAddressData(data);
                      setActiveStep(activeStep + 1);
                    }}
                    addressData={addressData}
                    ref={addressFormRef}
                  />
                )}

                {activeStep === 1 && <PaymentForm ref={paymentFormRef} />}
                {activeStep === 2 && <Review />}

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </>
  );
}

export default Checkout;
