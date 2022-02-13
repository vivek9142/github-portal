import React from 'react';
import { Grid,Typography,List,ListItem } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const About  = (props) => {
    return (
        <Grid container {...props}>
            <Grid item>
                <Typography variant='h5'>About App</Typography>
                <hr/>
                <Typography >
                    Our Website showcase the following functionalities - 
                </Typography>
                <List>
                    <ListItem alignItems='flex-start'>
                        <ArrowRightIcon fontSize='small'/>
                        <Typography>
                            Search through github users and their repos.
                        </Typography>
                    </ListItem>

                    <ListItem alignItems='flex-start'>
                        <ArrowRightIcon fontSize='small'/>
                        <Typography>
                            Look for any Github user along with their Work,collaborations,code_creativity.
                        </Typography>
                    </ListItem>

                </List>
            </Grid>

        </Grid>
    )
}

export default About;