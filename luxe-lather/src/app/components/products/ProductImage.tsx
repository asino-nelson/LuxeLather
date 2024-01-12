"use client"

import { CartProductType } from "@/app/product/[productId]/ProductDetails"
import Image from "next/image"

interface ProductImageProps {
    cartProduct: CartProductType
}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct
}) => {
  return (
    <div className="h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        <div className="relative aspect-square">
            <Image 
              fill
              src={cartProduct.image}
              alt={cartProduct.name}
              className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
            />
        </div>
    </div>
  )
}

export default ProductImage
