import React from "react"
import Saludo from "./Mensaje"
import {getProducts, getProductsByCategory}  from "../productsMock"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const Bienvenida = () => {
    
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts


        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
           })
           .catch(error => {
            console.log(error)
           })
    }, [categoryId])



    return(
        <div>
            <Saludo greeting="a TecnoApp estos son todos nuestros productos"/>
            <hr></hr>
            <ItemList products={products}/>
        </div>
    )

}

export default Bienvenida