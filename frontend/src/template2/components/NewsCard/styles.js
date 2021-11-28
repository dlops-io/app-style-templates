
const styles = theme => ({
    root: {
        display: 'flex',
        marginBottom: "20px",
    },
    grow: {
        flexGrow: 1,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        //flex: '1 0 auto',
        // backgroundColor: theme.palette.action.hover,
        paddingTop: "5px",
        paddingBottom: "0px",
    },
    imageContent: {
        width: "40%",
    },
    textContent: {
        width: "70%",
    },
    image: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    description: {
        fontSize: "0.85rem",
    },
    spacer: {
        padding: "5px",
    },
});

export default styles;