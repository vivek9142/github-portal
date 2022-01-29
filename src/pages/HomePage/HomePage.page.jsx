import React from 'react';
import {Card,CardContent,Typography,Grid,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MainForm from '../../components/MainForm/MainForm.component';
import About from '../../components/About/About.component';

const useStyles = makeStyles(theme => ({
    gridMargin: {
        marginBottom:'2rem'
    },
    homepage__container:{
        background: theme.palette.background.default,
        '&>div' :{
            height: '100vh'
        }
    }
}));
const HomePage = (props) => {
    const classes = useStyles();

    const redirectHandler = () => {
        props.history.push('/users/');
    }
    return(
        <Paper className={classes.homepage__container}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid  item>
                    <Card className={classes.gridMargin} >
                    <CardContent>
                        <Typography align='center' gutterBottom variant='h2'>GitHub Portal</Typography>
                        <About direction="column" justifyContent="center" alignItems="center"/>
                    </CardContent>
                </Card>

                <Card raised>
                    <CardContent>
                        <MainForm onRedirect={redirectHandler}/>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            
        </Paper>
    )
};

export default HomePage;