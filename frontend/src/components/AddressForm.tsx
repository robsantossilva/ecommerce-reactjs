import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "../util/vendor/yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().required().max(255).label("First Name"),
  lastName: yup.string().required().max(255).label("Last Name"),
  address1: yup.string().required().max(255).label("Address 1"),
  city: yup.string().required().max(255).label("City"),
  state: yup.string().required().max(255).label("State"),
  zip: yup.string().required().max(255).label("Zip"),
  country: yup.string().required().max(255).label("Zip"),
});

export interface AddressFormRefComponent {
  handleSubmit: () => void;
}

export type AddressData = {
  firstName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
};

type AddressFormProps = {
  getAddressData: (data: AddressData) => void;
  addressData?: AddressData;
};

const AddressForm = forwardRef(
  (props: AddressFormProps, ref: ForwardedRef<AddressFormRefComponent>) => {
    const buttonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<AddressData>({
      resolver: yupResolver(validationSchema),
      defaultValues: props.addressData,
    });

    const onSubmit: SubmitHandler<AddressData> = (data, event) => {
      props.getAddressData(data);
    };

    useImperativeHandle(ref, () => ({
      handleSubmit: () => {
        buttonRef.current.click();
      },
    }));

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              {...register("firstName")}
              helperText={errors.firstName && errors.firstName.message}
              error={!!errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              {...register("lastName")}
              helperText={errors.lastName && errors.lastName.message}
              error={!!errors.lastName}
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address1"
              {...register("address1")}
              helperText={errors.address1 && errors.address1.message}
              error={!!errors.address1}
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              {...register("address2")}
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              {...register("city")}
              helperText={errors.city && errors.city.message}
              error={!!errors.city}
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              {...register("state")}
              helperText={errors.state && errors.state.message}
              error={!!errors.state}
              label="State/Province/Region"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="zip"
              {...register("zip")}
              helperText={errors.zip && errors.zip.message}
              error={!!errors.zip}
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              {...register("country")}
              helperText={errors.country && errors.country.message}
              error={!!errors.country}
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
        <button
          ref={buttonRef}
          type="submit"
          style={{ display: "none" }}
        ></button>
      </form>
    );
  }
);

export default AddressForm;
