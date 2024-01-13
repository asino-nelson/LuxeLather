"use client"

import Heading from "@/app/components/Heading"
import { Avatar, Rating } from "@mui/material"
import moment from "moment"

interface ListRatingProps{
    product: any
}

const ListRating:React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Customer reviews"/>
      <div className="text-sm mt-2">
        {product.reviews && product.reviews.map((review:any)=>{
            return <div key={review.id} className="max-w-300px mb-6">
                <div className="flex gap-3 items-center">
                    <Avatar src={review.user.image}/>
                    <div className="font-semibold">{review?.user.name}</div>
                    <div className="font-light">{moment(review.createdDate).fromNow()}</div>
                </div>
                <div className="mt-2">
                    <Rating value={review.rating} readOnly />
                    <div className="ml-2 font-light">
                        {review.comment}
                    </div>
                </div>
                
            </div>
        })}
      </div>
    </div>
  )
}

export default ListRating
