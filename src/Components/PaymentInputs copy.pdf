import React from 'react';
import { PaymentInputsContainer } from 'react-payment-inputs';
import { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

export default function PaymentInputs() {
  const [cardNumber, setCardNumber] = useState('Card Number');
  const [expiryDate, setExpiryDate] = useState('Expiration Date');
  const [cvc, setCvc] = useState('CVC Number');

  function handleChangeCardNumber(value) {
    return value;
  }

  function handleChangeExpiryDate() {
    return 0;
  }

  function handleChangeCVC() {
    return 0;
  }
  return (
    <PaymentInputsContainer>
      {({ meta, getCardNumberProps, getExpiryDateProps, getCVCProps }) => (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <h1>All Info Used For Purchases!&nbsp;&nbsp;<PaymentIcon fontSize="large" /></h1>
          </Grid>
          {/* <Grid item xs={12}>
            <p>Already have an account? Sign in (Link)</p>
          </Grid> */}
          <Grid item xs={12}>
            <TextField onChange={handleChangeCardNumber(getCardNumberProps)} style={{width: '100%'}} defaultValue={cardNumber} />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={handleChangeExpiryDate(getExpiryDateProps)} style={{width: '100%'}} defaultValue={expiryDate} />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={handleChangeCVC(getCVCProps)} style={{width: '100%'}} defaultValue={cvc} />
          </Grid>
          {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
        </Grid>
      )}
    </PaymentInputsContainer>
  );
}