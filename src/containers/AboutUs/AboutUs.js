import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ts_1 from '../../media/download.jpg'

import MenuBar from '../../components/MenuBar'
import './style.css'
import Footer from '../../components/Footer'

export default function ActionAreaCard() {
    return (
        <div className='aboutUs'>
            <MenuBar></MenuBar>
            <h2 className='aboutUs-heading'>Our Story</h2>
            <p className='text'>At Moz, we believe there is a better way to do marketing. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We're excited to simplify SEO for everyone through our software, education, and community.</p>
            <div className='founder'>
                <img src={ts_1} alt="pic1" height='200px'></img>
                <div>
                    <p className='founder-text'>Founder</p>
                    <p className='founder-description'>Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started as a blog and an online community where some of the world's first SEO experts shared their research and ideas. We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry expertise transformed into a small consulting firm and led us to create some of our first SEO tools. </p>
                </div>
            </div>
            <div className='founder2'>
                <div>
                    <p className='founder-text2'>Founder</p>
                    <p className='founder-description2'>Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started as a blog and an online community where some of the world's first SEO experts shared their research and ideas. We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry expertise transformed into a small consulting firm and led us to create some of our first SEO tools. </p>
                </div>
                <img className='founder-image2' src={ts_1} alt="pic1" height='200px'></img>
            </div>
            <div className='founder'>
                <img src={ts_1} alt="pic1" height='200px'></img>
                <div>
                    <p className='founder-text'>Founder</p>
                    <p className='founder-description'>Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started as a blog and an online community where some of the world's first SEO experts shared their research and ideas. We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry expertise transformed into a small consulting firm and led us to create some of our first SEO tools. </p>
                </div>
            </div>
            {/* <Divider sx={{ width: 1 / 2, my: 5, ml: 60 }}></Divider> */}
            {/* <Footer></Footer> */}
        </div>
    );
}
