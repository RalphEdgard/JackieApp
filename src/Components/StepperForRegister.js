import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { ReactComponent as LogoSvg } from '../images/android2.svg';
import Register1 from './Register1';
import Register2 from './Register2';
import PaymentInputs from './PaymentInputs';

export default function StepperForRegister() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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
                    alignItems="center">
                    <Box sx={{ maxWidth: 400 }}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            <Step>
                                <StepLabel>
                                    Register General User Information
                                </StepLabel>
                                <StepContent>
                                    <Register1 />
                                    <Box sx={{ mb: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                    style={{ width: '100%' }}
                                                >
                                                    Next
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </StepContent>
                            </Step>
                            <Step>
                                <StepLabel>
                                    Register Function User Information
                                </StepLabel>
                                <StepContent>
                                    <Register2 />
                                    <Box sx={{ mb: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                    style={{ width: '100%' }}
                                                >
                                                    Next
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}
                                                    style={{ width: '100%' }}
                                                >
                                                    Back
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </StepContent>
                            </Step>
                            <Step>
                                <StepLabel>
                                    Register Function User Information
                                </StepLabel>
                                <StepContent>
                                    <PaymentInputs />
                                    <Box sx={{ mb: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                    style={{ width: '100%' }}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}
                                                    style={{ width: '100%' }}
                                                >
                                                    Back
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </StepContent>
                            </Step>
                        </Stepper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
