import Container from "@/app/components/Container"
import ProductDetails from "./ProductDetails"
import { product } from "@/app/utils/product"
import ListRating from "./ListRating";

interface IParams {
    productId ?: string;
}

const Product = ({params}: {params:IParams}) => {

    console.log("params", params)

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>ADD RATING</div>
          <div>
            <ListRating product={product}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
