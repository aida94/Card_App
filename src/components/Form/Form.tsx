import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

const CardForm = () => {
  return (
    <form noValidate autoComplete="off" onSubmit={() => {}}>
      <Grid container>
        <Grid item xs={12}>
          <InputLabel id="nameLabel">Name</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="name"
              name="name"
              type="text"
              placeholder="Joe Doe"
              margin="dense"
            />
            <FormHelperText>Please fill in your name</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <InputLabel id="cardNumberLabel">Card Number</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="cardNumber"
              name="cardNumber"
              type="text"
              placeholder="1111 1111 1111 1111"
              margin="dense"
            />
            <FormHelperText>
              Please enter a valid credit card number
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <InputLabel id="expiryDateLabel">Expiry Date</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="expiryDate"
              name="expiryDate"
              type="text"
              placeholder="12/29"
              margin="dense"
            />
            <FormHelperText>Please enter a valid expiry date</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <InputLabel id="cvcLabel">CVC (Security code)</InputLabel>
          <FormControl fullWidth>
            <TextField
              id="cvc"
              name="cvc"
              type="text"
              placeholder="001"
              margin="dense"
            />
            <FormHelperText>Please enter a valid security code</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default CardForm;
