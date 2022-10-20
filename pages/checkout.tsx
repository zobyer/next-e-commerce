import React from "react"
import CheckoutAddress from "../components/checkout/address"
import CheckoutProducts from "../components/checkout/products"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import TopBar from "../components/topbar"

function checkout() {
  return (
    <div>
      <TopBar />
      <NavBar />

      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <CheckoutAddress />
        <CheckoutProducts />
      </div>

      <Footer />
    </div>
  )
}

export default checkout
