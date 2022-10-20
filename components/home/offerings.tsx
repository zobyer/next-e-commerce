import React from "react"
import { NextComponentType } from "next"
import Image from "next/image"
import OfferingsData from "../../interfaces/offerings-props"

type offeringsProps = {
  offering: OfferingsData[]
}

const Offerings = (features: offeringsProps) => {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
        {features.offering.map((feature, i) => {
          return (
            <div
              className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"
              key={i}
            >
              <Image
                src={`/images/icons/${feature.imageUrl}`}
                alt="Delivery"
                className="w-12 h-12 object-contain"
                width={48}
                height={48}
              />
              <div>
                <h4 className="font-medium capitalize text-lg">
                  {feature.name}
                </h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Offerings
