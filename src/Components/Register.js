import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonIcon from '@mui/icons-material/Person';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { ReactComponent as LogoSvg } from "../images/android2.svg";

function Register() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7} md={7} style={{ backgroundColor: "#d3d3d3" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100vh",
                            }}
                        >
                            <LogoSvg style={{ width: "500px", height: "500px" }} />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={5}
                        md={5}
                        container
                        align="center"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12}>
                                <h1>Sign Up its Easy!&nbsp;&nbsp;<PersonIcon fontSize="large" /></h1>
                            </Grid>
                            <Grid item xs={12}>
                                <p>Already have an account? Sign in (Link)</p>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>
                                    <TextField style={{ left: '14px', width: '90%' }} />
                                </Grid>
                                <Grid item xs={6}  >
                                    <TextField style={{ left: '10px', width: '90%' }} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField style={{ width: '98%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField style={{ width: '98%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button style={{ width: '98%', backgroundColor: '#1976d2', color: 'white' }}>Create An Account</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Register;