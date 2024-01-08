import Container from "@/app/components/Container"
import ProductDetails from "./ProductDetails"
import { products } from "@/app/utils/products"

interface IParams {
    productId ?: string
}

const Product = ({params}: {params:IParams}) => {

    console.log("params", params)

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={products} />
        {/* create a product page in the utils folder and put that product with description */}
      </Container>
    </div>
  )
}

export default Product
