import React, { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import DataService from "../../services/DataService";
import styles from './styles';
import RecipeReviewCard from "../RecipeReviewCard";


const Home = (props) => {
    const { classes } = props;

    console.log("================================== Home ======================================");


    // Component States
    const [contentList, setContentList] = useState([]);

    // Setup Component
    useEffect(() => {
        var content = [
            { id: 1, image: "/images/paella.png", title: "Shrimp and Chorizo Paella", cuisine: "Spanish", description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." },
            { id: 2, image: "/images/chicken-curry.png", title: "Chicken Curry with Coconut", cuisine: "Kerala", description: "A Popular Kerala style chicken curry with a spicy and flavourful ,roasted coconut gravy. Also known as Varutharacha Kozhi Curry" },
            { id: 3, image: "/images/borscht.png", title: "Borscht", cuisine: "Ukrainian", description: "A hot beetroot soup that satisfies both meat-eaters and vegetarians. This dish comes in  many shades of red depending on the kind of beet used." },
            { id: 4, image: "/images/khorovats.png", title: "Khorovats", cuisine: "Armenian", description: "Khorovats is a unique Armenian barbecue method where the meat is first placed on a set of high-quality skewers called shish and shampoors, then grilled on" },
            { id: 5, image: "/images/split-pea-soup.png", title: "Yellow Split Pea Soup", cuisine: "Canadian", description: "This soup features split yellow peas, together with vegetables and spices and a ham hock or bone. This classic French-Canadian soup is warming and hearty and the perfect thing for cooler days" },
            { id: 6, image: "/images/lobster-roll.png", title: "Lobster Rolls", cuisine: "American", description: "A New England classic that’s easy to make. This classic recipe lets the lobster shine with big chunks of sweet meat, a little mayo, and a touch of lemon." }
        ]

        setContentList(content)
    }, []);

    // Handlers



    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={5}>
                        {contentList && contentList.map((item, index) =>
                            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                                <RecipeReviewCard recipe={item}></RecipeReviewCard>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default withStyles(styles)(Home);