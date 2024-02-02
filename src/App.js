import './App.css';
import {Button, Container, ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import theme from './Styles/theme/Index';
import AppBar from './Components/appbar/Index';
import Banner from './Components/banner';
import Promotions from './Components/Promotions';
import Routers from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Products } from './Components/Products';

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
     <Products/>
    </Container>
    </ThemeProvider>
   
  );
}

export default App;
