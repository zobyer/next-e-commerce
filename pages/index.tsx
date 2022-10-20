import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import AdsBanner from "../components/ads/banner"
import CategoryCard from "../components/category/category-card"
import Footer from "../components/footer"
import Banner from "../components/home/banner"
import Offerings from "../components/home/offerings"
import NavBar from "../components/navbar"
import ProductCardHolder from "../components/product/product-card-holder"
import TopBar from "../components/topbar"
import CategoryCardData from "../interfaces/category-card"

import OfferingsData from "../interfaces/offerings-props"
import ProductCardData from "../interfaces/product-card"

const allOfferings: OfferingsData[] = [
  {
    imageUrl: "delivery-van.svg",
    name: "Free Shipping",
    description: "Order over $200",
  },

  {
    imageUrl: "money-back.svg",
    name: "Money Rturns",
    description: "30 days money returs",
  },

  {
    imageUrl: "service-hours.svg",
    name: "24/7 Support",
    description: "Customer support",
  },
]

const allCategories: CategoryCardData[] = [
  {
    imageUrl: "category-1.jpg",
    name: "Bedroom",
  },
  {
    imageUrl: "category-2.jpg",
    name: "Mattrass",
  },
  {
    imageUrl: "category-3.jpg",
    name: "Outdoor",
  },
  {
    imageUrl: "category-4.jpg",
    name: "Sofa",
  },
  {
    imageUrl: "category-5.jpg",
    name: "Living Room",
  },
  {
    imageUrl: "category-6.jpg",
    name: "Kitchen",
  },
]

const topNewArrivals: ProductCardData[] = [
  {
    id: 1,
    imageUrl: "product1.jpg",
    name: "Guyer Chair",
    price: 55.9,
    discountedPrice: 45.0,
    quantity: 2,
  },
  {
    id: 2,
    imageUrl: "product4.jpg",
    name: "Bed King Size",
    price: 55.9,
    discountedPrice: 45.0,
    quantity: 10,
  },
  {
    id: 3,
    imageUrl: "product2.jpg",
    name: "Couple Sofa",
    price: 55.9,
    discountedPrice: 45.0,
    quantity: 5,
  },
  {
    id: 1,
    imageUrl: "product3.jpg",
    name: "Mattrass X",
    price: 55.9,
    discountedPrice: 45.0,
    quantity: 20,
  },
]

const recommendedProducts: ProductCardData[] = topNewArrivals

const Home: NextPage = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Banner />
      <Offerings offering={allOfferings} />
      <CategoryCard allCategories={allCategories} />
      <ProductCardHolder
        heading="top new arrival"
        allProducts={topNewArrivals}
      />

      <ProductCardHolder
        heading="recomended for you"
        allProducts={recommendedProducts}
      />

      <AdsBanner />

      <Footer />
    </div>
  )
}

export default Home
