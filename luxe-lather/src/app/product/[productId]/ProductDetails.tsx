"use client";

import { Rating } from "@mui/material";

interface ProductDetailProps{
    product: any
}

const ProductDetails:React.FC<ProductDetailProps> = ({ product }) => {

  const productRating = product.reviews.reduce((acc: number, item:any) => item.rating + acc, 0) / product.reviews.length

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>{product.image}</div>
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-slate-700 text-2xl font-medium">
          {product.name}</h2>
          <div className="flex items-center gap-3 mt-4">
            <Rating value={productRating} readOnly/>
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
