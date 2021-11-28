import React, { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import LinesEllipsis from 'react-lines-ellipsis';

import DataService from "../../services/DataService";
import styles from './styles';


const NewsCard = (props) => {
    const { classes } = props;
    let { news } = props;

    console.log("================================== NewsCard ======================================");


    // Component States


    // Setup Component
    useEffect(() => {

    }, []);

    // Handlers
    const handleContentReflow = () => {

    }


    return (
        <Card className={classes.root}>
            <div className={classes.imageContent}>
                <CardMedia
                    className={classes.image}
                    image={news.image}
                    title={news.title}
                />
            </div>
            <div className={classes.textContent}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {news.title}
                    </Typography>
                    <div className={classes.spacer}></div>
                    <LinesEllipsis
                        className={classes.description}
                        text={news.description}
                        maxLine='4'
                        ellipsis=' ...'
                        basedOn='letters'
                        onReflow={handleContentReflow}
                    />
                </CardContent>
            </div>
        </Card>
    );
};

export default withStyles(styles)(NewsCard);