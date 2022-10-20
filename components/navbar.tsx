import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"

const NavBar: NextComponentType = () => {
  return (
    <div className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>

          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <Link href="/">
              <div className="flex justify-center items-center hover:bg-gray-100 transition px-6 py-3">
                <Image
                  src="/images/icons/sofa.svg"
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-center items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image
                  src="/images/icons/terrace.svg"
                  alt="terrace"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
                <span className="ml-6 text-gray-600 text-sm">Terarce</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-start items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image
                  src="/images/icons/bed.svg"
                  alt="bed"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
                <span className="ml-6 text-gray-600 text-sm">Bed</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image
                  src="/images/icons/office.svg"
                  alt="office"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
                <span className="ml-6 text-gray-600 text-sm">office</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image
                  src="/images/icons/outdoor-cafe.svg"
                  alt="outdoor"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image
                  src="/images/icons/bed-2.svg"
                  alt="Mattress"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link href="/">
              <a className="text-gray-200 hover:text-white transition">Home</a>
            </Link>
            <Link href="/shop">
              <a className="text-gray-200 hover:text-white transition">Shop</a>
            </Link>
            <Link href="/shop">
              <a className="text-gray-200 hover:text-white transition">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="text-gray-200 hover:text-white transition">
                Contact us
              </a>
            </Link>
          </div>
          <Link href="/login">
            <a className="text-gray-200 hover:text-white transition">Login</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
