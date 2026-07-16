import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { products } from '../assets/assets';

const Product = () => {
  const{productId} = useParams();
  // console.log(productId);
  const {Products} = useContext(ShopContext);
  const[productData, setProductData] = useState(false);


  const fetchProudctData = async () => {
      products.map((item) =>{
        if(item._id === productId){
          setProductData(item)
          console.log(item);
          return null;
        }
      })
  }

  useEffect(()=>{
    fetchProudctData();
  },[productId, products]);

  return (
    <div>
      
    </div>
  )
}

export default Product
