import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';


import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';



import styles from './styles';


const Header = (props) => {
    const { classes } = props;

    console.log("================================== Header ======================================");

    // State
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
    const [settingsMenuAnchorEl, setSettingsMenuAnchorEl] = useState(null);

    // Handlers
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open)
    };
    const openSettingsMenu = (event) => {
        setSettingsMenuAnchorEl(event.currentTarget);
    };
    const closeSettingsMenu = (event) => {
        setSettingsMenuAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="transparent" elevation={0}>
                <Toolbar variant="dense">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" className={classes.appLink}>
                        <Typography className={classes.appTitle} >
                            🍲 Foodie
                        </Typography>
                    </Link>

                    <div className={classes.grow} />
                    <MediaQuery minWidth={512}>
                        <div>
                            <IconButton color="inherit" component={Link} to="/" className={classes.navItem}>
                                <Icon>home</Icon>
                                <Typography variant="caption">&nbsp;Menu 1</Typography>
                            </IconButton>
                            <IconButton color="inherit" component={Link} to="/currentmodel" className={classes.navItem}>
                                <Icon>insights</Icon>
                                <Typography variant="caption">&nbsp;Menu 2</Typography>
                            </IconButton>
                        </div>
                    </MediaQuery>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <div className={classes.list}>
                        <List>
                            <ListItem button component={Link} to="/route1">
                                <ListItemIcon><Icon>home</Icon></ListItemIcon>
                                <ListItemText primary='Menu 1' />
                            </ListItem>
                            <ListItem button component={Link} to="/route2">
                                <ListItemIcon><Icon>insights</Icon></ListItemIcon>
                                <ListItemText primary='Menu 2' />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default withStyles(styles)(Header);
