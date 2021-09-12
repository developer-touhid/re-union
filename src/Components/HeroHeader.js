import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

const HeroHeader = () => {

  const classes = useStyles();

    return (
        <Grid container>
                <Grid item xs={12} sm={6} className={classes.heroContainer}>
                    <Typography component="h1" variant="h3">Your Perfect Planners</Typography>
                    <Typography component="p">here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src='https://www.linkpicture.com/q/hero_4.jpg' alt='hero' />
                </Grid>
        </Grid>
    );
};

export default HeroHeader;