
import { Box, Slide } from '@mui/material'
import { MessageText, PromotionsContainer} from '../../Styles/promotions'
import { useEffect, useRef, useState } from 'react'
const promotionsData=[
    { id: 2, image: '/images/banner/banner-img2.webp' },
    { id: 3, image: '/images/banner/banner-img3.webp' },
    { id: 4, image: '/images/banner/banner-img4.webp' },
    { id: 5, image: '/images/banner/banner-img5.webp' }
]

export default function Promotions(){
    const containerRef=useRef()
    const [promotionIndex, setPromotionIndex] = useState(0);
    const [show,setShow]=useState(true)

useEffect(()=>{
setTimeout(()=>{
setShow(false)
},3000)

    const intervalId= setInterval(()=>{
        setPromotionIndex(i=>(i+1) % promotionsData.length)
setShow(true)
setTimeout(()=>{
    setShow(false)
    },3000)

    },4000)

    return()=>{
        clearInterval(intervalId)
    }
},[])
    return(
        
       <PromotionsContainer ref={containerRef}>
        <Slide
container={containerRef.current}
        direction={show?'left':'right'}
        in={show}

        timeout={{
            enter: 500,
            exit: 800
        }}
        >
<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
<img
            src={process.env.PUBLIC_URL + promotionsData[promotionIndex].image}
            style={{ width: '100%', height: 'auto', borderRadius: ' 10px', marginTop:'10px'}}
          />
</Box>
        </Slide>

       </PromotionsContainer>
    )
}