"use client"
import { useCart } from "@/hooks/useCart"
import Link from "next/link"
import { MdArrowBack } from "react-icons/md"
import Heading from "../components/Heading"
import AddTocartBtn from "../components/AddTocartBtn"

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
      <div className="grid grid-cols-5 text-xs gap-4 pb-3 mt-8">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Total</div>
      </div>
      <div>
        {cartProducts && cartProducts.map((item) => {
            return <div key={item.id}>{item.name}</div>
        })}
      </div>
      <div className="border-t-2 border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[100px]">
            <AddTocartBtn label="Clear Cart" onClick={()=>{}} small outline/>
        </div>
        <div className="flex flex-col gap-1 items-start">
            <div className="flex justify-between w-full text-base font-semibold">
                <span>Subtotal</span>
                <span>$1,000</span>
            </div>
            <AddTocartBtn label="Purchase " onClick={()=>{}}/>
        </div>

      </div>
    </div>
  )
}

export default CartClient
