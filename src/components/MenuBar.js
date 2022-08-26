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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fade from '@mui/material/Fade';

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
            main: '#ffffff',
            darker: '#053e85',
        },
        neutral: {
            main: '#181c47',
            // contrastText: '#fff',
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary" elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon color='neutral' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                                fontWeight: 400,
                                letterSpacing: '.1rem',
                                color: 'neutral',
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
                                            sx={{ my: 4, mx: 3, fontWeight: 700, fontSize: 16, color: 'black', display: 'block', typography: 'Raleway' }}
                                        >
                                            {url.pages}
                                        </Button>
                                    </Link>
                                ))
                            }
                        </Box>
                        <Box sx={{ flexGrow: 25, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                color="neutral"
                                sx={{ fontWeight: 700, fontSize: 16, }}
                            >
                                Dashboard
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <Link to='/dashboard/profile'>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                </Link>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Box>
                        <Link to='/login'>
                            <Button color="neutral" sx={{ mr: 5, fontWeight: 700, fontSize: 16, }}>Login</Button>
                        </Link>
                        <Link to='/signUp'>
                            <Button color="neutral" sx={{ fontWeight: 700, fontSize: 16, }}>Sign up</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
            <Divider></Divider>
            <Outlet />
        </ThemeProvider >
    );
};
export default ResponsiveAppBar;
