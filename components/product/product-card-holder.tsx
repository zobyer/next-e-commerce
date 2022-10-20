import React from "react"
import ProductCardData from "../../interfaces/product-card"
import ProductCard from "./product-card"

type ProductCardHolderProps = {
  heading: String
  allProducts: ProductCardData[]
}

function ProductCardHolder(productCardHolderProps: ProductCardHolderProps) {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {productCardHolderProps.heading}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {productCardHolderProps.allProducts.map((product, i) => {
          return <ProductCard product={product} key={i} />
        })}
      </div>
    </div>
  )
}

export default ProductCardHolder
