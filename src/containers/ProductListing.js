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
        <div className="ui container" style={topMargin}>
            <h2>Product listing</h2>
            <div className="product_container" style={pro_con}>
                <ProductComponent/>
            </div>
            
        </div>
    )
}

const topMargin = {
    marginTop: "50px",
}

const pro_con = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridRowGap: '20px',
    gridColumnGap: '25px'
}


export default ProductListing
