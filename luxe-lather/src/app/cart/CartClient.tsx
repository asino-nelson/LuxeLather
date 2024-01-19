import { useCart } from "@/hooks/useCart"
import Link from "next/link"
import { MdArrowBack } from "react-icons/md"

const CartClient = () => {

    const {cartProducts} = useCart()

    if (!cartProducts || cartProducts.length === 0){
        return(
            <div>
                <div>
                    Cart is Empty
                </div>
                <div>
                    <Link href={"/"} className="">
                        <MdArrowBack/>
                        <span>Start shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default CartClient
