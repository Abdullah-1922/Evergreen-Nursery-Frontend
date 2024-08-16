/* eslint-disable @typescript-eslint/no-explicit-any */

import HeroSection from "../components/ui/HomepageComponents/HeroSection";
import HomePageCards from "../components/ui/HomepageComponents/HomePageCards";

import HomePageCategory from "../components/ui/HomepageComponents/HomePageCategory";
import HomeUserReviewSection from "../components/ui/HomepageComponents/HomeUserReviewSection";
import Footer from "../components/ui/HomepageComponents/Footer";
import Faq from "../components/ui/HomepageComponents/Faq";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <HomePageCategory />
      <HomePageCards />
      <HomeUserReviewSection />

      <section className="bg-white mt-20">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                href="/product/6692c6d0de1469399a8e58fe"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://www.greatgardenplants.com/cdn/shop/files/Uptick_Gold_Tickseed_2.png?v=1718995651"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Bronze Tickseed
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href="/product/6692c6996be34d926a33e0eb"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://www.greatgardenplants.com/cdn/shop/products/sedum-sod-1.jpg?v=1608001590"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  SedumSod®
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href="/product/6692c66d6be34d926a33e0e7"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://www.greatgardenplants.com/cdn/shop/products/Heuchera-Wildberry-2-P-sw.jpg?v=1643744007"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Coral Bells
                  </h3>
                </a>
                <a
                  href="/product/6692c46d6be34d926a33e0cd"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716485340-1566417254329_20190821-1566417255317.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Peace Lily
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href="/product/6692c40c6be34d926a33e0c7"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716482231-51Hqq52QRbL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  String of Pearls
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Faq />

      <Footer />
    </div>
  );
};

export default Homepage;
