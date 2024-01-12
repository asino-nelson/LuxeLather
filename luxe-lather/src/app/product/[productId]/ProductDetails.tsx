"use client";

import AddTocartBtn from "@/app/components/AddTocartBtn";
import ProductImage from "@/app/components/products/ProductImage";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailProps{
    product: any
}

export type CartProductType = {
  id: string,
  name: string,
  description: string,
  category: string,
  brand: string,
  image: string,
  quantity: number,
  price: number
}




const ProductDetails:React.FC<ProductDetailProps> = ({ product }) => {

  const [cartProduct, setCartProduct] = useState<CartProductType>(
    {
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      brand: product.brand,
      image: product.image,
      quantity: 1,
      price: product.price
    }
  )

  const productRating = product.reviews.reduce((acc: number, item:any) => item.rating + acc, 0) / product.reviews.length
  const handleQtyIncrease = useCallback(()=>{
    if (cartProduct.quantity === 99){
      return;
    }
    setCartProduct((prev)=> {
      return {...prev, quantity: ++prev.quantity}
    })
  },[cartProduct]);
  const handleQtyDecrease = useCallback(()=>{
    if (cartProduct.quantity === 1){
      return;
    }
    setCartProduct((prev)=> {
      return {...prev, quantity: --prev.quantity}
    })
  },[cartProduct]);

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImage cartProduct={cartProduct}/>
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-slate-700 text-2xl font-medium">
          {product.name}</h2>
          <div className="flex items-center gap-3 mt-4">
            <Rating name="size-small" value={productRating} readOnly/>
            <div> 
             {product.reviews.length} reviews
            </div>
          </div>
          <div className="text-justify mt-4 mb-4">{product.description}</div>
          <div className={product.inStock ? "text-green-500 font-semibold" : "text-rose-500 font-semibold"}>
            {product.inStock ? "In Stock" : "Out of stock"}
          </div>
          <div className="mt-4">
            <SetQuantity
             cartProduct={cartProduct}
             handleQtyDecrease={handleQtyDecrease}
             handleQtyIncrease={handleQtyIncrease}
            />
          </div>
          <div className="max-w-[300px] mt-4">
            <AddTocartBtn 
              label="Add To Cart"
              onClick={() => {}}
            />
          </div>
          
        </div>
    </div>
  );

};

export default ProductDetails;
