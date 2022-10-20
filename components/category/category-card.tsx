import React from "react"
import Image from "next/image"
import CategoryCardData from "../../interfaces/category-card"

type CategoryCardProps = {
  allCategories: CategoryCardData[]
}

function CategoryCard(categoryCardProps: CategoryCardProps) {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categoryCardProps.allCategories.map((category) => {
          return (
            <div className="relative rounded-sm overflow-hidden group">
              <Image
                src={`/images/category/${category.imageUrl}`}
                alt="category 1"
                width={400}
                height={308}
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                {category.name}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryCard
