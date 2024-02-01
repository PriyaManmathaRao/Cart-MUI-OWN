import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../Styles/banner";
import { Typography } from "@mui/material";


export default function Banner(){
    const theme=useTheme()
    return(
        <BannerContainer>
            <BannerImage src="/images/banner/welcome-1.avif"/>
<BannerContent>
<Typography variant="h6">Huge Collection</Typography>
<BannerTitle variant="h2">New Items</BannerTitle>
<BannerDescription variant="subtitle">roiyuiouuuuuuuuuuuuuuuuuu
uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
uuuuuudffngdkjghlaejwoituuu</BannerDescription>
</BannerContent> 
        </BannerContainer>
    )   
}