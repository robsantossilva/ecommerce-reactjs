import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as yup from "../util/vendor/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export interface PaymentFormRefComponent {
  handleSubmit: () => void;
}

const validationSchema = yup.object().shape({
  cardName: yup.string().required().max(255).label("First Name"),
  cardNumber: yup.string().required().max(255).label("Last Name"),
  expDate: yup.string().required().max(255).label("Address 1"),
  cvv: yup.string().required().max(255).label("City"),
  saveCard: yup.string().required().max(255).label("State"),
});

export type PaymentData = {
  cardName?: string;
  cardNumber?: string;
  expDate?: string;
  cvv?: string;
  saveCard?: string;
};

type PaymentFormProps = {
  paymentData?: PaymentData;
};

const PaymentForm = forwardRef(
  (props: PaymentFormProps, ref: ForwardedRef<PaymentFormRefComponent>) => {
    const buttonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

    useImperativeHandle(ref, () => ({
      handleSubmit: () => {
        buttonRef.current.click();
      },
    }));

    const {} = useForm<PaymentData>({
      resolver: yupResolver(validationSchema),
    });

    return (
      <form>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
        <button
          type="submit"
          ref={buttonRef}
          style={{ display: "none" }}
        ></button>
      </form>
    );
  }
);

export default PaymentForm;
