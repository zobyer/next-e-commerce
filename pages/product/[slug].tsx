import React from "react"
import Image from "next/image"
import TopBar from "../../components/topbar"
import NavBar from "../../components/navbar"
import Footer from "../../components/footer"
import ProductCardHolder from "../../components/product/product-card-holder"
import ProductCardData from "../../interfaces/product-card"

const recommendedProducts: ProductCardData[] = [
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

function ProductDetails() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>

      <div className="container grid grid-cols-2 gap-6">
        <div className="">
          <Image
            src="/images/products/product1.jpg"
            alt="product"
            className="w-full"
            width={740}
            height={548}
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="w-[135px] h-[100px] relative cursor-pointer border border-primary">
              <Image
                src="/images/products/product2.jpg"
                alt="product2"
                className="w-full"
                layout="fill"
              />
            </div>
            <div className="w-[135px] h-[100px] relative cursor-pointer">
              <Image
                src="/images/products/product3.jpg"
                alt="product2"
                layout="fill"
              />
            </div>
            <div className="w-[135px] h-[100px] relative cursor-pointer">
              <Image
                src="/images/products/product4.jpg"
                alt="product2"
                layout="fill"
              />
            </div>
            <div className="w-[135px] h-[100px] relative cursor-pointer">
              <Image
                src="/images/products/product5.jpg"
                alt="product2"
                layout="fill"
              />
            </div>
            <div className="w-[135px] h-[100px] relative cursor-pointer">
              <Image
                src="/images/products/product6.jpg"
                alt="product2"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            Italian L Shape Sofa
          </h2>
          <div className="flex items-center mb-4">
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
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius
            eum reprehenderit dolore vel mollitia optio consequatur hic
            asperiores inventore suscipit, velit consequuntur, voluptate
            doloremque iure necessitatibus adipisci magnam porro.
          </p>

          <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-sm"
                  className="hidden"
                />
                <label
                  htmlFor="size-sm"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input type="radio" name="color" id="red" className="hidden" />
                <label
                  htmlFor="red"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fc3d57;" }}
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="black"
                  className="hidden"
                />
                <label
                  htmlFor="black"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#000" }}
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="white"
                  className="hidden"
                />
                <label
                  htmlFor="white"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#fff" }}
                ></label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              necessitatibus deleniti natus dolore cum maiores suscipit optio
              itaque voluptatibus veritatis tempora iste facilis non aut
              sapiente dolor quisquam, ex ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              quae accusantium voluptatem blanditiis sapiente voluptatum. Autem
              ab, dolorum assumenda earum veniam eius illo fugiat possimus illum
              dolor totam, ducimus excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quia modi ut expedita! Iure molestiae labore cumque nobis quasi
              fuga, quibusdam rem? Temporibus consectetur corrupti rerum
              veritatis numquam labore amet.
            </p>
          </div>

          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Color
                </th>
                <th className="py-2 px-4 border border-gray-300 ">
                  Blank, Brown, Red
                </th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Material
                </th>
                <th className="py-2 px-4 border border-gray-300 ">Latex</th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Weight
                </th>
                <th className="py-2 px-4 border border-gray-300">55kg</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ProductCardHolder
        heading="recomended for you"
        allProducts={recommendedProducts}
      />

      <Footer />
    </div>
  )
}

export default ProductDetails
