import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        primary: {
            main: '#f3f3f9',
            darker: '#053e85',
        },
        neutral: {
            main: '#181c47',
            // contrastText: '#fff',
        },
    },
});

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{
                backgroundColor: "white",
            }} elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon color='black' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Raleway',
                                fontSize: 30,
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                                flexGrow: 1
                            }}
                        >
                            LOGO
                        </Typography>
                        <Typography
                            sx={{
                                flexGrow: 12,
                                fontSize: 14,
                                color: '#757575',
                                textAlign: 'center',
                            }}><CopyrightIcon></CopyrightIcon> Copyright 2022, Ei2PI. All right reserved.</Typography>
                        <Stack direction="row" spacing={3} sx={{
                            flexGrow: 0, justifyContent: "center", color: "#757575"
                        }} value={value} onChange={handleChange}>
                            <FacebookIcon></FacebookIcon>
                            <InstagramIcon></InstagramIcon>
                            <TwitterIcon></TwitterIcon>
                            <YouTubeIcon></YouTubeIcon>
                            <LinkedInIcon></LinkedInIcon>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

        </ThemeProvider>
    );
}
