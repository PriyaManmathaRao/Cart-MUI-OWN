import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme/Index";


export const BannerContainer= styled(Box)(({theme})=>({
display:'flex',
justifyContent:'center',
width:'100%',
height:'100%',
padding:'0px 0px',
background:Colors.light_gray,

}))

export const BannerImage= styled('img')(({src,theme})=>({
src:`url(${src})`,
width: '250px',
height:'300px',
[theme.breakpoints.down('md')]:{
    width:'300px'
},
[theme.breakpoints.down('sm')]:{
    width:'320px',
    height:'300px'
}
}))

export const BannerContent=styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    maxWidth:420,
    padding:'30px'
}))


export const BannerTitle= styled(Typography)(({theme})=>({
    lineHeight:1.5,
    fontSize:'72px',
    marginBottom:'20px',
 
}))


export const BannerDescription= styled(Typography)(({theme})=>({
    lineHeight:1.25,
letterSpacing:1.23,
marginBottom:'3em',

}))