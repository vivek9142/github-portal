import React from 'react';
import { Grid,Typography,List,ListItem } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const About  = (props) => {
    return (
        <Grid container {...props}>
            <Grid item>
                <Typography variant='h5'>About App</Typography>
                <hr/>
                <Typography gutterTop variant='p'>
                    Our Website showcase the following functionalities - 
                </Typography>
                <List>
                    <ListItem alignItems='flex-start'>
                        <ArrowRightIcon fontSize='small'/>
                        <Typography variant='p'>
                            Search through github users and their repos.
                        </Typography>
                    </ListItem>

                    <ListItem alignItems='flex-start'>
                        <ArrowRightIcon fontSize='small'/>
                        <Typography variant='p'>
                            Look for any Github user along with their Work,collaborations,code_creativity.
                        </Typography>
                    </ListItem>

                    <ListItem alignItems='flex-start'>
                        <ArrowRightIcon fontSize='small'/>
                        <Typography variant='p'>
                            You can also search for specific Github user by usingn URL '/users/:USER_NAME'
                        </Typography>
                    </ListItem>
                </List>
            </Grid>

        </Grid>
    )
}

export default About;