import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cardimg from '../assets/card.webp'
import calendarimg from '../assets/calendar.webp'
import { maxHeight } from '@mui/system';

const cards = () => {
  return (
  <div className='row'>
    <Card sx={{ maxWidth: 860}}   values ={['flex-start']}>
   
      <CardActionArea>
        <CardMedia
          component="img"
          height="w"
          Logo src={cardimg}
          alt="cards-card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
            My Name,My Pride
            <br></br>
          </Typography>
          <Typography gutterBottom fontSize='12px' component="div" fontWeight='light'>
          100 Visiting Cards at Rs 180

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color='primary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 860 }}   values ={['flex-start']}>

   <CardActionArea>
     <CardMedia
       component="img"
       height="relative"
       Logo src={calendarimg}
       alt="calendar-card"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
         Share new year 
         wishes with Custom
         Calendars
       </Typography>
       <Typography gutterBottom fontSize='12px' component="div" fontWeight='light'>
        Start at Rs 150
        </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions>
   <Button variant="contained" color='primary'>Buy Now</Button>
      
   </CardActions>
 </Card>
    </div>   )
}

export default cards