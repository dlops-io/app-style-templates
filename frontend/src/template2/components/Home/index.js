import React, { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import DataService from "../../services/DataService";
import styles from './styles';
import SymbolsList from '../SymbolsList';
import NewsCard from '../NewsCard';

const Home = (props) => {
    const { classes } = props;

    console.log("================================== Home ======================================");


    // Component States
    const [contentList, setContentList] = useState([]);

    // Setup Component
    useEffect(() => {
        var list = [
            { "link": "https://www.bbc.com/news/technology-59432659", "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/983A/production/_120707983_mr_goxx.jpg", "title": "Mr Goxx, the cryptocurrency-trading hamster, dies", "description": "The cryptocurrency-trading hamster Mr Goxx has died. The rodent, who shot to internet fame for his ability to often outperform human investors using a specially built trading cage, died on Tuesday. The furry financier's official Twitter account announced the hamster's death to his 18,000 followers on social media." },
            { "link": "https://www.bbc.com/news/technology-59373968", "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/29FA/production/_121764701_screenshot2021-11-24at09.55.20.png", "title": "Tolkien estate blocks JRR Token crypto-currency", "description": "Lord of the Rings creator JRR Tolkien's estate has successfully blocked a crypto-currency called JRR Token. Lawyers representing the estate said the product, launched in August, infringed the author's trademark. Websites selling and promoting the crypto-currency, jrrtoken.com and thetokenofpower.com, featured rings, hobbit holes and a wizard like Gandalf." },
            { "link": "https://www.bbc.co.uk/newsround/57115261", "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/8D83/production/_118572263_gettyimages-1168907062.jpg", "title": "Cryptocurrency: What is it and how does it work?", "description": "The concept of cryptocurrencies might sound pretty complicated, but it's all quite easy to understand once you break it down. Simply put, cryptocurrencies are digital currencies or digital money. They don't exist physically like the coins and cash people all around the world use today, but instead they're completely virtual. Although we can't see or touch cryptocurrencies, they do hold value. Cryptocurrencies can be stored in a 'digital wallet' on a smartphone or computer, and owners can send them to people to buy things." },
            { "link": "https://www.bbc.com/news/technology-59402310", "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/11220/production/_119367107_hi068000734.jpg", "title": "Indian government set to ban cryptocurrencies", "description": "India is set to go ahead with its plan to ban most cryptocurrencies in the country under a long-awaited bill. Expectations had grown in recent months that the government may soften its view on digital currencies. The ban would relate to all private cryptocurrencies with certain exceptions to allow the promotion of the underlying technology and its uses. Cryptocurrency prices dropped on Indian exchanges after the decision on the bill's future was announced." },
            { "link": "https://www.bbc.com/news/business-59059097", "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/213A/production/_121260580_squidgame_season1_episode1_00_46_07_05.png", "title": "Squid Game cryptocurrency rockets...", "description": "If you're a fan wanting to express your devotion to the hit Korean Netflix show Squid Game - well, there's a cryptocurrency for that. Gamers have created an online version of the programme, for which you need the Squid cryptocurrency to play. On Tuesday, it was worth a modest 1 cent, but by Friday it had exploded in value, reaching $4.39 (£3.18). But Squid has been criticised for not allowing investors to resell their tokens. The dystopian series - which tells the story of a group of people forced to play deadly children's games for money - has become a viral sensation." },
        ];

        setContentList(list)

    }, []);

    // Handlers



    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth={false} className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant="h5" display="block" gutterBottom={false}>
                                Live Predictions
                            </Typography>
                            <div className={classes.spacer}></div>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" display="block" gutterBottom={false}>
                                Cryptocurrencies Live Market Data
                            </Typography>
                            <div className={classes.spacer}></div>
                            <SymbolsList display={5}></SymbolsList>
                            <div className={classes.spacer}></div>
                            <Typography variant="caption" display="block" gutterBottom={false}>
                                Pricing data is updated frequently. Currency in USD
                            </Typography>
                            <div className={classes.spacer}></div>
                            <Typography variant="h5" display="block" gutterBottom={false}>
                                In the News
                            </Typography>
                            <div className={classes.spacer}></div>
                            {contentList && contentList.map((item, index) =>
                                <NewsCard news={item} key={index}></NewsCard>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default withStyles(styles)(Home);