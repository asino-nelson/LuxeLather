"use client";

import AddTocartBtn from "@/app/components/AddTocartBtn";
import ProductImage from "@/app/components/products/ProductImage";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

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
  const {handleAddProductToCart, cartProducts} = useCart()
  const [isProductInCart, setIsProductInCart] = useState(false)
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
  const router = useRouter()

  console.log(cartProducts)

  useEffect(()=> {
    setIsProductInCart(false)

    if(cartProducts){
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1){
        setIsProductInCart(true)
      }
    }
  }, [cartProducts])

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
          {isProductInCart ? (
          <> 
            <p className="mt-4 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={24} />
              <span>Product added to cart</span>
            </p>
            <div className="max-w-[300px] mt-2">
              <AddTocartBtn outline label="View Cart" onClick={() => {
                router.push("/cart")
              }}/>
            </div>
          </>
          ) : (
          <>
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
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>)}
         
          
        </div>
    </div>
  );

};

export default ProductDetails;
