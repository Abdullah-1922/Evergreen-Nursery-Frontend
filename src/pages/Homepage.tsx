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
      <section>
        <p className="text-3xl text-center py-10 underline font-bold">
          Image section
        </p>
        <div className="grid p-5 grid-cols-2 md:grid-cols-3 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2018/04/1522807799571.jpg?resize=324%2C324&ssl=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2018/04/8abe7e5f2fff44264539019e6dc247f3_250x.jpg?resize=250%2C205&ssl=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2018/08/download-28.jpg?resize=221%2C228&ssl=1"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2018/04/1522807607136.jpg?resize=324%2C324&ssl=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2018/05/150305491673986830-madhumalti-flower-plant.jpg?resize=324%2C324&ssl=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2018/08/licuala-grandis.jpg4ceca22ac80c6.jpg?resize=324%2C324&ssl=1"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2022/04/download-40.jpg?w=225&ssl=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2022/08/download-3-2.jpg?resize=214%2C225&ssl=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i0.wp.com/www.satvai.com/wp-content/uploads/2018/07/1514-4-hibiscus-white.jpg?resize=324%2C324&ssl=1"
                alt=""
              />
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
