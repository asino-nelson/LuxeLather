"use client"

import Link from "next/link"
import { CartProductType } from "../product/[productId]/ProductDetails"
import { formatPrice } from "../utils/formatPrice"
import { truncateText } from "../utils/truncate"
import Image from "next/image"


interface ItemContentProps{
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({item}) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-2 border-slate-200 py-5 items-center">
      <div
        className="col-span-2 justify-self-start flex gap-2 md:gap-4"
      >
        <Link href={`/product/${item.id}`}>
            <div className="relative w-[70px] aspect-square">
                <Image src={item.image} alt={item.name} fill className="object-contain"/>
            </div>
        </Link>
        <div className="flex flex-col justify-between">
            <Link href={`/product/${item.id}`}>
                {truncateText(item.name)}
            </Link>
            <div className="w-[70px]">
                <button onClick={()=>{}}>
                    Trash icon
                </button>
            </div>
        </div>
      </div>
      <div>{formatPrice(item.price)}</div>
      <div></div>
      <div></div>
    </div>
  )
}

export default ItemContent
