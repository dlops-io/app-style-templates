import React, { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import styles from './styles';
import { GetInitials } from "../../services/Common";


const RecipeReviewCard = (props) => {
    const { classes } = props;
    let { recipe } = props;

    console.log("================================== RecipeReviewCard ======================================");


    // Component States
    const [expanded, setExpanded] = useState(false);

    // Setup Component
    useEffect(() => {

    }, []);

    // Handlers
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {GetInitials(recipe.cuisine)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Icon>more_vert</Icon>
                    </IconButton>
                }
                title={recipe.title}
                subheader={recipe.cuisine}
                className={classes.recipeHeader}
            />
            <CardMedia
                className={classes.recipeMedia}
                image={recipe.image}
                title="Paella dish"
            />
            <CardContent className={classes.recipeContent}>
                <Typography variant="body2" component="p">
                    {recipe.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.recipeActions}>
                <IconButton aria-label="add to favorites">
                    <Icon className={classes.recipeActionsIcon}>favorite_border</Icon>
                </IconButton>
                <IconButton aria-label="share">
                    <Icon className={classes.recipeActionsIcon}>share</Icon>
                </IconButton>
                <div className={classes.grow} />
                <IconButton aria-label="share">
                    <Icon className={classes.recipeActionsIcon}>expand_more</Icon>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(RecipeReviewCard);