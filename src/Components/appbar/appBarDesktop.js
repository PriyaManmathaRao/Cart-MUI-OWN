import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../Styles/appbar/Index";
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";
export default function AppBarDesktop({matches}){

    return (
  
 <AppbarContainer>
        <AppbarHeader>
            Shopping Cart
        </AppbarHeader>
        <MyList type="row">
            <ListItemText primary="Home"/>
            <ListItemText primary="Categories"/>
            <ListItemText primary="Products"/>
            <ListItemText primary="Contact Us"/>
            <ListItemButton>
                <ListItemIcon>
                <SearchIcon/>
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        <Actions matches={matches}/>
     </AppbarContainer>   
    
    )
    }