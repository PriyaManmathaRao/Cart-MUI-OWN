import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconContainerDesktop, MyList } from "../../Styles/appbar/Index";
import ShoppingCartIcon  from "@mui/icons-material/ShoppingCart";
import  FavoriteIcon  from "@mui/icons-material/Favorite";
import  PersonIcon  from "@mui/icons-material/Person";
import { Colors } from "../../Styles/theme/Index";


export default function Actions({matches}){
    const Component= matches? ActionIconContainerDesktop:ActionIconContainerDesktop

    return(
        <Component>


        <MyList type="row">
            <ListItemButton
            
            sx={{
                justifyContent: 'center',
                color: matches && Colors.secondary

            }}
            >
                <ListItemIcon
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    color: matches && Colors.secondary
                }}
                >
                    <ShoppingCartIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
             sx={{
                justifyContent: 'center',
                color: matches && Colors.secondary

            }}
            
            >
                <ListItemIcon
                
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    color : matches && Colors.secondary

                }}>
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
             sx={{
                justifyContent: 'center',
                color: matches && Colors.secondary

            }}
            
            >
                <ListItemIcon
                 sx={{
                    display:'flex',
                    justifyContent:'center',
                    color: matches && Colors.secondary

                }}
                >
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
        </MyList>
        </Component>
    )
}