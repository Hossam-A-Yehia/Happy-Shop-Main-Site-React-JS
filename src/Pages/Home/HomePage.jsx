import React, { useState } from "react";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeCategory from "../../components/Home/HomeCategory";
import BestSeller from "../../components/Products/BestSeller";
import Footer from "../../Utils/Footer";
import DiscountSlider from "../../components/Home/discountSlider/DiscountSlider";
import Over from "../../components/Home/overCard/Over";
import SecNav from "../../Utils/SecNav";
import Slider from "../../components/Home/Slider";

function HomePage() {
  return (
    <div>
      <SecNav/>
      <DiscountSlider />
      <HomeCategory />
      <BestSeller title={"جميع المنتجات"} btnTitle={"المزيد"} />
      <BestSeller title={"الاكثر مبيعا"} btnTitle={"المزيد"} />
      <DiscountSection />
      <BestSeller title={"الاكثر شهره"} btnTitle={"المزيد"} />
      <BestSeller title={"الاحذية"} btnTitle={"المزيد"} />
      <Over/>
      <BestSeller title={"العاب الفيديو"} btnTitle={"المزيد"} />
      <BestSeller title={"الكتب"} btnTitle={"المزيد"} />
      <Slider />
      <BestSeller title={"موبايلات"} btnTitle={"المزيد"} />
      <BestSeller title={"السوبر ماركت"} btnTitle={"المزيد"} />
      <BrandFeatured />
      <Footer />
    </div>
  );
}

export default HomePage;
