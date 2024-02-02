import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Products } from "../Components/Products"
export default function Routers(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Products/>}/>
        </Routes>
        </BrowserRouter>
    )
}