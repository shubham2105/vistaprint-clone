import React from 'react'
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import Searchbar from './Searchbar';

const Navbar = () => (
  <Stack 
  direction="row" 
  alignItems="center" 
  p={2} 
  sx={{position:'sticky',
  background:'white',
  top:0,
  justifyContent:'space-between'}}>

    <Link to='/' style={{display:"flex",alignItems:"center"}}>
      <img src={logo} alt="logo" height={100}/>
    </Link>
    <Searchbar/>

  </Stack>
)

export default Navbar