import React, { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


import DataService from "../../services/DataService";
import styles from './styles';
import RecipeReviewCard from "../RecipeReviewCard";


const RecipeReview = (props) => {
    const { classes } = props;

    console.log("================================== RecipeReview ======================================");


    // Component States
    const [content, setContent] = useState({});


    // Setup Component
    useEffect(() => {
        setContent({
            id: 1,
            image: "/images/paella.png",
            title: "Shrimp and Chorizo Paella",
            cuisine: "Spanish",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        })
    }, []);

    // Handlers



    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth="md" className={classes.container}>
                    <RecipeReviewCard recipe={content}></RecipeReviewCard>
                </Container>
            </main>
        </div>
    );
};

export default withStyles(styles)(RecipeReview);