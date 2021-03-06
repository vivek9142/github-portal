import React from 'react';
import {Card,CardContent,Typography,Grid, Box} from '@material-ui/core';
import useHomePageStyles from './HomePage.styles';
import MainForm from '../../components/MainForm/MainForm.component';
import About from '../../components/About/About.component';

const HomePage = (props) => {
    const classes = useHomePageStyles();
    const redirectHandler = () => {
        props.history.push('/users/');
    }
    return(
        <Box className={classes.homepage__container}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid  item>
                    <Card className={classes.gridMargin} >
                    <CardContent>
                        <Typography align='center' gutterBottom variant='h2'>GitHub Portal</Typography>
                        <About direction="column" justifyContent="center" alignItems="center"/>
                    </CardContent>
                </Card>

                <Card raised>
                    <CardContent  className={classes.mainForm__container}>
                        <MainForm onRedirect={redirectHandler} {...props}/>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            
        </Box>
    )
};

export default HomePage;