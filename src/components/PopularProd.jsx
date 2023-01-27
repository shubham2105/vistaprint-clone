import { Card, CardActionArea, CardMedia } from '@mui/material'
import { spacing } from '@mui/system';
import React from 'react'
import mp1 from '../assets/mostpopular/mp1.webp';
import mp2 from '../assets/mostpopular/mp2.webp';
import mp3 from '../assets/mostpopular/mp3.webp';
import mp4 from '../assets/mostpopular/mp4.webp';
import mp5 from '../assets/mostpopular/mp5.webp';
import mp6 from '../assets/mostpopular/mp6.webp';


const popularProductsCard = () => {
  return (
    <div className='row'>
    <Card sx={{ maxWidth: 275,}}   values ={['flex-start']}>
   
    <CardActionArea>
      <CardMedia
        component="img"
        height="w"
        Logo src={mp1}
        alt="cards-card"
      />
      </CardActionArea>
  </Card>


  <Card sx={{ maxWidth: 275}}   values ={['flex-start']}>
   
    <CardActionArea>
      <CardMedia
        component="img"
        height="w"
        Logo src={mp2}
        alt="cards-card"
      />
      </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 275}}   values ={['flex-start']}>
   
    <CardActionArea>
      <CardMedia
        component="img"
        height="w"
        Logo src={mp3}
        alt="cards-card"
      />
      </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 275}}   values ={['flex-start']}>
   
   <CardActionArea>
     <CardMedia
       component="img"
       height="w"
       Logo src={mp4}
       alt="cards-card"
     />
     </CardActionArea>
 </Card>

 <Card sx={{ maxWidth: 275}}   values ={['flex-start']}>
   
    <CardActionArea>
      <CardMedia
        component="img"
        height="w"
        Logo src={mp5}
        alt="cards-card"
      />
      </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 275}}   values ={['flex-start']}>
   
    <CardActionArea>
      <CardMedia
        component="img"
        height="w"
        Logo src={mp6}
        alt="cards-card"
      />
      </CardActionArea>
  </Card>
  
  

  </div>
  )
}

export default popularProductsCard
