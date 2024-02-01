import { useTheme } from "@mui/material/styles"
import { products } from "../FakeData"
import { Container, Grid } from "@mui/material"


export default function Product(){

    const theme=useTheme()
    const renderProducts=products.map((product)=> (
        <Grid item key={product.id} display={'flex'} flexDirection={'column'} alignItems='center'>
    </Grid>

    ));
    return(
        <Container>
            <Grid>
                container
                justifyContent={'center'}
                sx={{margin:'20px 4px 10px 4px'}}
                {renderProducts}
            </Grid>
        </Container>
    )
}