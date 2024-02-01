import { styled } from "@mui/material/styles"
import { Colors } from "../theme/Index"
import { Button, IconButton } from "@mui/material"

export const Product= styled(Box)(()=>(
    {
display:'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
    }
))


export const ProductImage= styled('img')((src=>(
    {
src:`url(${src})`,
width:'100%',
background: Colors.light_gray,
padding:'10px'
    }
)))


export const ProductActionButton= styled(IconButton)(()=>({
    background: Colors.white,
    margin: 4,
}))

export const ProductFavButton= styled(ProductActionButton)((isFav)=>({
color: isFav? Colors.primary:Colors.light,

}))

export const ProductAddToCart= styled(Button)(({show})=>({
width:'120px',
fontSize:'12px',
background: Colors.secondary,
opacity: 0.9,
}))