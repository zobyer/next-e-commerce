import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import CategoryCard from "../components/category/category-card"
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

      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          recomended for you
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product1.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Guyer Chair
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product4.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Bed King Size
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product2.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Couple Sofa
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product3.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattrass X
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product1.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Guyer Chair
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product4.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Bed King Size
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product2.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Couple Sofa
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="/images/products/product3.jpg"
                alt="product 1"
                width={358}
                height={260}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattrass X
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
          <div className="col-span-1 space-y-8">
            <Image
              src="/images/logo.svg"
              alt="logo"
              lang="fill"
              className="w-30"
              width={128}
              height={24}
            />
            <div className="mr-2">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                hic?
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
