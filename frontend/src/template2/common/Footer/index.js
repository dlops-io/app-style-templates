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
                    label={<Typography className={classes.navText}>Home</Typography>}
                    icon={<Icon className={classes.navIcon}>home</Icon>}
                    className={classes.navItem}
                    component={Link} to="/"
                />
                <BottomNavigationAction
                    label={<Typography className={classes.navText}>Symbols</Typography>}
                    icon={<Icon className={classes.navIcon}>list_alt</Icon>}
                    className={classes.navItem}
                    component={Link} to="/symbols"
                />
                <BottomNavigationAction
                    label={<Typography className={classes.navText}>Watchlist</Typography>}
                    icon={<Icon className={classes.navIcon}>legend_toggle</Icon>}
                    className={classes.navItem}
                    component={Link} to="/"
                />
                <BottomNavigationAction
                    label={<Typography className={classes.navText}>Search</Typography>}
                    icon={<Icon className={classes.navIcon}>search</Icon>}
                    className={classes.navItem}
                    component={Link} to="/recipe" />
                <BottomNavigationAction
                    label={<Typography className={classes.navText}>Account</Typography>}
                    icon={<Icon className={classes.navIcon}>manage_accounts</Icon>}
                    className={classes.navItem}
                    component={Link} to="/" />
            </BottomNavigation>
        </AppBar>
    );
};

export default withStyles(styles)(Footer);