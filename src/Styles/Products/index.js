import { Box, Button, IconButton, styled } from "@mui/material";
import { Colors } from "../theme/Index";

export const Product= styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
}))


export const ProductImage= styled('img')(({src})=>({
    src:`url(${src})`,
    width:'100%',
    background:Colors.light_gray,
    padding:'10px'
}))

export const ProductActionButton= styled(IconButton)(()=>({
background: Colors.white,
margin: 4
}))

export const ProductFavButton= styled(ProductActionButton)(({isfav})=>({
    color: isfav ? Colors.primary: Colors.light,
    
    }))


    export const ProductAddToCart= styled(Button)(({show})=>({
width : '12px',
fontSize: '12px',
background: Colors.secondary,
opacity: 0.9,
    }))