import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

import styles from './styles';

const Footer = (props) => {
    const { classes } = props;

    console.log("================================== Footer ======================================");

    // Component States
    const [navigationItem, setSetNavigationItem] = useState(0);

    // Setup Component
    useEffect(() => {

    }, []);

    // Handlers
    const handleSelect = (newValue) => {
        setSetNavigationItem(newValue);
    };

    return (
        <AppBar position="fixed" color="transparent" elevation={0} className={classes.appBar} >
            <BottomNavigation
                value={navigationItem}
                onChange={(event, newValue) => {
                    handleSelect(newValue);
                }}
                showLabels
                className={classes.nav}
            >
                <BottomNavigationAction
                    label={<Typography className={classes.navText}>Recipes</Typography>}
                    icon={<Icon className={classes.navIcon}>set_meal</Icon>}
                    className={classes.navItem}
                    component={Link} to="/"
                />
                <BottomNavigationAction
                    label={<Typography className={classes.navText}>Cook</Typography>}
                    icon={<Icon className={classes.navIcon}>dinner_dining</Icon>}
                    className={classes.navItem}
                    component={Link} to="/recipe" />
                <BottomNavigationAction
                    label={<Typography className={classes.navText}>Ingredients</Typography>}
                    icon={<Icon className={classes.navIcon}>food_bank</Icon>}
                    className={classes.navItem}
                    component={Link} to="/" />
            </BottomNavigation>
        </AppBar>
    );
};

export default withStyles(styles)(Footer);