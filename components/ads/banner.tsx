import React from "react"
import Image from "next/image"

function AdsBanner() {
  return (
    <div className="container relative w-full h-[361px] pb-16 my-6">
      <a href="#">
        ads
        <Image src="/images/offer.jpg" alt="ads" layout="fill" />
      </a>
    </div>
  )
}

export default AdsBanner
