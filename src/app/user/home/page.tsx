
import "../../../styles/user.css"
import React from 'react'
import SlideArea from "@/components/user/slide/SlideArea"
import BannerSection from "@/components/user/banner/BannerSection"
import ShippingSection from "@/components/user/shipping/ShippingSection"
import ProductSection from "@/components/user/product/ProductSection"
const HomePage = () => {

  return (
    <>
     <SlideArea />
     <ShippingSection />
     <BannerSection/>
     <ProductSection />
    </>
  )
}

export default HomePage