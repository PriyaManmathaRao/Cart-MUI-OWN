import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme/Index";
import "@fontsource/montez"

export const AppbarContainer= styled(Box)(()=> ({
        display:"flex",
        margin:4,
        justifyContent:"center",
        padding:"2px 8px"
    }));


    export const AppbarHeader= styled(Typography)(
        ()=>(
            {
                padding:"4px",
                flexGrow:1,
                fontSize:"4em",
                fontFamily:'"Montez","cursive"',
                color:Colors.secondary
            }
        )
    )


    export const MyList= styled(List)(
        ({type})=>({
            display: type ==='row'? 'flex':'block',
            flexGrow:3,
            justifyContent:'center',
            alignItems:'center'
        })
    )


    export const ActionIconContainerDesktop= styled(Box)(()=>({
        flexGrow:0,


    }))