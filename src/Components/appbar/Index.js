import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import AppBarMobile from "../appbarMobile"
import AppBarDesktop from "./appBarDesktop"

export default function AppBar(){
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down('md'))
    
    return(
<>
{matches?<AppBarDesktop matches={matches}/>:<AppBarDesktop matches={matches}/>}
</>
    )
}