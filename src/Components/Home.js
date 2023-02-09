import { Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'mui-image';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import svgImage from '../images/landscape.svg';

function Home() {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={2} style={{ background: '#c0d219' }}>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <h1>Example Website: Displaying My Skills</h1>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card variant="outlined" sx={{ width: 320 }} style={{ background: '#eeeee4' }}>
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
                  Example Website
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <p>
                    This application shows the skills that I have accumalated in college and
                    in my career so far. I always find ways to improve myself, in terms of soft
                    skills and hard skills. The contents found in this website demonstrates how I
                    can work with React components such as fields and logins.
                  </p>
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
                    6.3k views (Just for show)
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                    1 hour ago (Just for show)
                  </Typography>
                </CardOverflow>
              </Card>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
              <Grid item xs={6}>
                <Button style={{ width: '100%' }} variant="contained">Just For Show</Button>
              </Grid>
              <Grid item xs={6}>
                <Button style={{ width: '100%' }} variant="outlined">Just For Show</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={svgImage} height="100%" width="100" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
