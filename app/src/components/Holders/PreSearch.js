import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        flexGrow: 1,
        height: "50vh",
        width: "auto",
    },
    Item: {
        height: "50vh",
        "text-align": "center"
    },
    grow: {
        flexGrow: 0,
        height: "25%",
        "padding": "10%",
    },
})

function PreSearch(props) {
    const { classes } = props;
    return (
                    <Grid item className={classes.Item} >
                        <Typography variant="h4" color="inherit" className={classes.grow}>
                            Use the forms above to start your job search! Results will be displayed here.
                        </Typography>
                    </Grid>
    )
}

PreSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(PreSearch));