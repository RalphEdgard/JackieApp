import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ContentSlider from "./ContentSlider";

function Home() {
    const gradient = keyframes`
    {
    0% {
        background-position: 0 100%;
    }
    50% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0 100%;
    }}
    `;
    const AnimatedGradientText = styled.h1`
        animation: ${gradient} 9s ease-in-out infinite;
        background: linear-gradient(to right, #A52237, #1976d2);
        background-size: 700%;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    `;
    return (
        <>
            <Box flexGrow={1}>
                <Grid container spacing={2}>
                    <Grid item xs={6} style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center' }}>
                        <Grid container style={{ width: '470px' }}>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <h1>Buy An Item That You Like With</h1>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <AnimatedGradientText style={{ fontSize: '80px' }}>JACKIE!</AnimatedGradientText>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <p>The application is very simple to use, you are able to create an account and then simply browse the items page to select an item that you want and then purchase it!</p>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button style={{ width: '100%' }} variant="contained">Ralph</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button style={{width: '100%'}} variant="outlined">Ralph Too</Button>
                                </Grid>                                
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <ContentSlider />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home;