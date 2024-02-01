import './App.css';
import {Button, Container, ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import theme from './Styles/theme/Index';
import AppBar from './Components/appbar/Index';
import Banner from './Components/banner';
import Promotions from './Components/Promotions';
import Product from './products';
function App() {
useEffect(()=>{
document.title="Shopping-Cart"
},[])

  return (
    <ThemeProvider theme={theme}>
 <Container
    maxWidth="xl"
    sx={{
      background:'#fff'
    }}
    >
      
<AppBar/>
<Banner/>
     <Promotions/>
     <Product/>
    </Container>
    </ThemeProvider>
   
  );
}

export default App;
