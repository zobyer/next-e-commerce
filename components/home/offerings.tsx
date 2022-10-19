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
        {features.offering.map((feature) => {
          return (
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
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

        {/* <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src="/images/icons/money-back.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
            <p className="text-gray-500 text-sm">30 days money returs</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src="/images/icons/service-hours.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Offerings
