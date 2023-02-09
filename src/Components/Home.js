import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ContentSlider from "./ContentSlider";
import Image from 'mui-image';
import svgImage from "../images/landscape.svg"
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

function Home() {
    
    return (
        <>
            <Box flexGrow={1}>
                <Grid container spacing={2} style={{background: '#c0d219'}}>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <h1>Buy An Item That You Like With</h1>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card variant="outlined" sx={{ width: 320 }} style={{background: "#eeeee4"}}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                <img
                                    src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                                    srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                                </AspectRatio>
                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                Yosemite National Park
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                            <p>The application is very simple to use, you are able to create an account and then simply browse the items page to select an item that you want and then purchase it!</p>
                            </Typography>
                            <Divider />
                            <CardOverflow
                                variant="soft"
                                sx={{
                                display: 'flex',
                                gap: 1.5,
                                py: 1.5,
                                px: 'var(--Card-padding)',
                                bgcolor: 'background.level1',
                                }}
                            >
                                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                6.3k views
                                </Typography>
                                <Divider orientation="vertical" />
                                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                1 hour ago
                                </Typography>
                            </CardOverflow>
                        </Card>
                            </Grid>
                            <Grid container spacing={2} style={{marginTop: '20px'}}>
                                <Grid item xs={6}>
                                    <Button style={{ width: '100%' }} variant="contained">Just For Show</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button style={{width: '100%'}} variant="outlined">Just For Show</Button>
                                </Grid>                                
                            </Grid>
  
                        
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Image src={svgImage} height="100%" width="100"/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home;