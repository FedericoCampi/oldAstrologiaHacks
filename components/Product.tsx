import React from 'react'
import { urlFor } from '../sanity';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';
import toast from 'react-hot-toast';

interface Props {
    product: Product;
}

const Product = ({ product }: Props) => {

  const dispatch = useDispatch();
    
  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
      style: {
        backgroundColor: '#E7ECEE'
      },
      iconTheme: {
        primary: 'linear-gradient(to right, #ec4899, #8b5cf6) left bottom no-repeat',
        secondary: 'white',
      },
    })
  };

  return (
    <div className='flex h-fit w-[300px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[400px]
      md:w-[320px] md:p-10'>
        <div className='relative h-64 w-full md:h-[70%]'>
            <Image alt={"image"} src={urlFor(product.image[0]).url()} layout='fill' objectFit='contain'/>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-3'>
          <div className='space-y-2 text-xl text-white md:text-2xl'>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
          <div className='cartIcon' onClick={addItemToBasket}>
            <ShoppingCartIcon className='h-8 w-8 text-white'/>
          </div>
        </div>
    </div>
  )
}

export default Product