"use client";

import { Rating } from "@mui/material";
import { useState } from "react";

interface ProductDetailProps{
    product: any
}

export type CartProductType = {
  id: string,
  name: string,
  description: string,
  category: string,
  brand: string,
  selectedImg: SelectedImgType,
  quantity: number,
  price: number
}

export type SelectedImgType = {
  color: string,
  colorCode: string,
  image: string
}

const ProductDetails:React.FC<ProductDetailProps> = ({ product }) => {

  const [cartProduct, setCartProduct] = useState<CartProductType>(
    {
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      brand: product.brand,
      selectedImg: {...product.image[0]},
      quantity: 1,
      price: product.price
    }
  )

  const productRating = product.reviews.reduce((acc: number, item:any) => item.rating + acc, 0) / product.reviews.length

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>{product.image}</div>
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-slate-700 text-2xl font-medium">
          {product.name}</h2>
          <div className="flex items-center gap-3 mt-4">
            <Rating name="size-small" value={productRating} readOnly/>
            <div> 
             {product.reviews.length} reviews
            </div>
          </div>
          <div className="text-justify mt-4">{product.description}</div>
          <div className={product.inStock ? "text-green-500 font-semibold" : "text-rose-500 font-semibold"}>
            {product.inStock ? "In Stock" : "Out of stock"}
          </div>
          <div>
            Quantity
          </div>
          <div>
            ADD TO CART
          </div>
          
        </div>
    </div>
  );

};

export default ProductDetails;
