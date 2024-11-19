import React from "react";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iphone 14"
        subtitle="Experienced the power of the latest iphone 14 with our most pro camera ever."
        link="/product/673ab27732cd6b76305df4d3"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add studio Display and colour-matched Magic accessories to your bag after configure your Mac mini"
        link="/product/673ab27732cd6b76305df4db"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
