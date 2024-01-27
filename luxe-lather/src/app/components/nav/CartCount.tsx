"use client"

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation"
import { MdShoppingCart } from "react-icons/md";

const CartCount = () => {
    const router = useRouter();
    const {cartTotalQty} = useCart();

  return (
    <div 
        className="relative cursor-pointer"
        onClick={()=> router.push("/cart")}
    >
      <div className="text-3xl">
        <MdShoppingCart/>
      </div>
      <span className="absolute h-5 w-5 top-[-10px] right-[-10px] rounded-full flex items-center justify-center text-sm bg-slate-700 text-white">
        {cartTotalQty}
      </span>
    </div>
  )
}

export default CartCount
