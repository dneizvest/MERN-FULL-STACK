import React from 'react';

	const App = () => {
    	   return (
	   <Container maxWidth='lg'>
    	       <AppBar position='static' color='inherit'>
    	           <Typography variant='h2' align='center'>
    	               Memories
    	           </Typography>
    	           <img src={memories} alt='memories' height='600' />
    	       </AppBar>
    	       <Grow in>
    	           <Container>
    	               <Grid container justify='space-between' alignItems='stretch' spacing={3}>
    	                   <Grid item xs={12} sm={7}>
    	                       <Posts />
    	                   </Grid>
    	                   <Grid item xs={12} sm={4}></Grid>
    	               </Grid>
    	           </Container>
    	       </Grow>
    	   </Container>
    	   );
    	}
    
 

export default App;


import { Container, AppBar, Topography, Grow, Grid } from '@mui/material';

import useStyles from './styles';



