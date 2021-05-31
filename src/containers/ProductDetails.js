import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {selectedProduct, removeSelectedProduct} from '../redux/actions/productAction'



const ProductDetails = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    console.log('pd',product)
    //const {title, image, price, category, description} = product;

    const fetchProductDetail = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err=>console.log(err));
        dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
        if(productId && productId !== ""){
            fetchProductDetail();
        } 
        return () => {
            dispatch(removeSelectedProduct());
        }
    },[productId])
    

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div style={{marginTop: '50px'}}>Loading.....</div>
            ) : (
                <div style={{marginTop: '50px'}}>
                    <div>
                        <img style={{width:'400px', height: '400px'}} src={product.payload.image} />
                    </div>
                    <div>
                        {product.payload.title} 
                        <p>{product.payload.price}</p>
                    </div>
                    <div>
                        {product.payload.description}
                    </div>
                    <div>
                        {product.payload.category}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails
