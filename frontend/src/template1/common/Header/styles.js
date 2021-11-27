import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    appLink: {
        color: "inherit",
        textDecoration: "inherit",
    },
    appTitle: {
        fontSize: "1.5rem",
        lineHeight: "1.33",
        fontWeight: "800",
        letterSpacing: "3px",
        color: "#ffffff",
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 5,
        color: "#ffffff",
    },
    verticalDivider: {
        border: "1px solid white",
        marginLeft: "5px",
        marginRight: "5px",
    },
    list: {
        paddingTop: "20px",
        paddingLeft: "20px",
        width: 250,
    },
    listItemText: {
        fontSize: "15px"
    },
    navItem: {
        color: "#ffffff",
    },
});


export default styles;