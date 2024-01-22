"use client"
import { useCart } from "@/hooks/useCart"
import Link from "next/link"
import { MdArrowBack } from "react-icons/md"
import Heading from "../components/Heading"

const CartClient = () => {

    const {cartProducts} = useCart()

    if (!cartProducts || cartProducts.length === 0){
        return(
            <div className="flex flex-col items-center">
                <div className="text-2xl" >
                    Cart is Empty
                </div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                        <span>Start shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
    <div>
      <Heading title="Shopping cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-3">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Total</div>
      </div>
    </div>
  )
}

export default CartClient
