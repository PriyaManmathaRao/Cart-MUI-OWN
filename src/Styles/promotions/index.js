import { Box, Typography, styled } from "@mui/material";

export  const PromotionsContainer= styled(Box)(({theme})=>({
    [theme.breakpoints.up('md')]:{
padding:'40px 0px 40px 0px'
    },
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    padding: '40px 0px 40px 0px',
    overflow: 'hidden',
   
}))


