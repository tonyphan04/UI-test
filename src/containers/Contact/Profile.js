import React from 'react';

import MenuBar from '../../components/MenuBar'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Footer from '../../components/Footer'
import "./style.css"

import Map from '../../components/Map'

export default function Profile() {
    return (
        <div>
            <MenuBar></MenuBar>
            <Box sx={{ backgroundColor: "#f3f3f9", height: '250px', textAlign: "center" }}>
                <Typography sx={{
                    textAlign: "center",
                    fontSize: '48px',
                    fontFamily: "Graphik-Medium,sans-serif",
                    paddingTop: 5,
                }}>We would love to hear from you</Typography>
                <Typography sx={{ textAlign: "center", fontSize: '20px' }}>Have questions about our products,
                    features, trials, or pricing? Need a demo? <br />Our teams will help you.</Typography>
            </Box>

            <Typography sx={{
                textAlign: "center",
                fontSize: '48px',
                fontFamily: "Graphik-Medium,sans-serif",
                paddingTop: 5,
            }}>Contact</Typography>

            <Grid container spacing={1} sx={{ mt: 3, textAlign: "center", display: "flex", justifyContent: "center" }}>
                <Grid item xs={6} sx={{}}>
                    <Box sx={{ p: 2, border: '1px dashed grey', width: "400px" }}>
                        <Typography>Save</Typography>
                        <Typography>Save</Typography>
                        <Typography>+61 444 575 879</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ p: 2, border: '1px dashed grey', width: "400px", justifyContent: "right" }}>
                        <Typography>Save</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Typography sx={{
                textAlign: "center",
                fontSize: '48px',
                fontFamily: "Graphik-Medium,sans-serif",
                paddingTop: 5,
            }}>Connect with our office</Typography>

            <Grid container sx={{ backgroundColor: "#f3f3f9", width: "50%", height: '450px', textAlign: "center", mt: 3, ml: 40, mb: 2 }}>
                <Grid item xs={6} sx={{ textAlign: "left", paddingLeft: 5, fontFamily: "Graphik-Medium,sans-serif", }}>
                    <Typography sx={{
                        fontSize: '36px',
                        paddingTop: 1,
                    }}>Headquarter</Typography>
                    <Typography sx={{
                        fontSize: '20px',
                        paddingBottom: 5
                    }}>John St, Hawthorn VIC 3122</Typography>
                    <Typography sx={{
                        fontSize: '36px',
                        fontFamily: "Graphik-Medium,sans-serif",
                    }}>Contact</Typography>
                    <Typography sx={{ fontSize: '20px' }}>Phone: 1300 794 628</Typography>
                    <Typography sx={{ fontSize: '20px' }}>Email: 102xxxxxx@student.swin.edu.au</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Map></Map>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );
}