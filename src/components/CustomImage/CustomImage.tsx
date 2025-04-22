"use client";
import { ProductType } from '@/interfaces'
import Image from 'next/image'
import React, { useState } from 'react'

const CustomImage = ({ product, fill }: { product: ProductType, fill:boolean }) => {
  const [isLoad, setIsLoad] = useState(true)
  return (
    <Image
    className={`object-contain duration-700 ease-in-out ${isLoad && 'blur-2xl scale-110'}`}
    src={product.image}
    alt={product.title}
    fill={fill}
    onLoadingComplete={()=> setIsLoad(false)}
  />
  )
}

export default CustomImage