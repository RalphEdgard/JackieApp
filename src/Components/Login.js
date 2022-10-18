import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginIcon from "@mui/icons-material/Login";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { ReactComponent as LogoSvg } from "../src/images/android2.svg";

export default function Login() {
  return (
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
          <Grid item xs={12}>
            <>
              <h1>Sign in to App</h1>
              <LoginIcon />
            </>
            <p>New User? (Link) Create An Account</p>
            <TextField style={{ width: "50%" }} />
            <br />
            <TextField style={{ width: "50%" }} />
            <br />
            <Link color="primary" underline="hover">
              Link
            </Link>
            <br />
            <Button variant="outlined" style={{ width: "50%" }}>
              Outlined
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
