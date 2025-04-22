import React from "react";
import { ProductType } from "../../interfaces";
import Image from "next/image";
import CustomImage from "../CustomImage/CustomImage";
const Card = ({ product }: { product: ProductType }) => {
  return (
    <li className="min-h-96 flex flex-col border-2 border-gray-200 rounded-lg p-5 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <div className="relative flex-1">
       <CustomImage product={product} fill={true}/>
      </div>
      <span className="text-indigo-600 text-sm mb-2">{product.category}</span>
      <div className="flex justify-between items-center gap-4 mb-2">
        <h2 className="font-semibold truncate max-w-[170px]">
          {product.title}
        </h2>
        <span className="font-semibold">${product.price}</span>
      </div>
      <p className="text-gray-500 text-sm line-clamp-2">
        {product.description}
      </p>
    </li>
  );
};

export default Card;
