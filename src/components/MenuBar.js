import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Outlet, Link } from "react-router-dom"

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

const urls = [
    { pages: "FAQ", links: "/faq" },
    { pages: 'About', links: "/about" },
];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Raleway',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    typography: 'Raleway'
                                }}
                            >
                                {
                                    urls.map((url) => (
                                        <MenuItem key={url.pages} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" >{url.pages}</Typography>
                                        </MenuItem>
                                    ))}
                            </Menu>
                        </Box>
                        {/* Left menu display */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {
                                urls.map((url) => (
                                    <Link to={url.links}>
                                        <Button
                                            key={url.pages}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 4, mx: 3, color: 'white', display: 'block', typography: 'Raleway' }}
                                        >
                                            {url.pages}
                                        </Button>
                                    </Link>
                                ))
                            }
                        </Box>
                        <Link to='/login'>
                            <Button color="inherit">Login</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </ThemeProvider >
    );
};
export default ResponsiveAppBar;
