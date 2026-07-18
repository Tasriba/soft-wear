import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets, products } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const{productId} = useParams();
  // console.log(productId);
  const {products, currency, addToCart} = useContext(ShopContext);
  const[productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');


  const fetchProudctData = async () => {
      products.map((item) =>{
        if(item._id === productId){
          setProductData(item)
          setImage(item.image[0])
          // console.log(item);
          return null;
        }
      })
  }

  useEffect(()=>{
    fetchProudctData();
  },[productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*products data*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*products images*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img  onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/*products info*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_dull_icon} className='w-3 5' alt="" />
          </div>
          <p className='mtv-5 text-3xl font-medium '>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item == size ? 'border-pink-700' : ''} `}key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id,size)} className='bg-pink-500 text-black px-8 py-3 text-sm active:bg-pink-400'>ADD TO CART</button>
          <hr className='mt-8 ms:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original product.</p>
            <p>Cash on Delivery is available on thid product.</p>
            <p>easy return and exchange policy within 7 days.</p>
          </div>
        </div>     
      </div>
       {/*Description and review section*/}
       <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online store that allows customers to browse products, add them to a cart, place orders, and make payments over the internet.</p>
          <p>An e-commerce website typically displays products, prices, categories, shopping cart, and payment options so customers can shop online.</p>
        </div>
       </div>
       {/*Dispaly Related Products*/}
       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity - 0'></div>
}

export default Product
