import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LockIcon from '@mui/icons-material/Lock';
// import Button from "@mui/material/Button";

function Register2() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {/* <Grid container spacing={2}> */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    container
                    align="center"
                    justify="center"
                    alignItems="center"
                >
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <h1>Info Is Secured!&nbsp;&nbsp;<LockIcon fontSize="large" /></h1>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <p>Already have an account? Sign in (Link)</p>
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextField style={{ width: '100%' }} defaultValue='Address' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField style={{ width: '100%' }} defaultValue='State' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField style={{ width: '100%' }} defaultValue='Phone Number' />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Button style={{ width: '98%', backgroundColor: '#1976d2', color: 'white' }}>Create An Account</Button>
                        </Grid> */}
                    </Grid>
                    {/* </Grid> */}
                </Grid>
            </Box>
        </>
    );
}

export default Register2;