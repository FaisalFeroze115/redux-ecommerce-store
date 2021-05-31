import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import ProductComponent from "./ProductComponent"
import axios from "axios"
import {setProducts} from '../redux/actions/productAction'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProduct = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log('ERROR',err);
        })
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProduct();
    },[])

    return (
        <div className="ui grid container" style={topMargin}>
            <h2>Product listing</h2>
            <ProductComponent/>
        </div>
    )
}

const topMargin = {
    marginTop: "20px",
}
export default ProductListing
