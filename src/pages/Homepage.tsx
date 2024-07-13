import HeroSection from "../components/ui/HomepageComponents/HeroSection";
import HomePageCategory from "../components/ui/HomepageComponents/HomePageCategory";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <HomePageCategory />

      <section>
        <div className="py-10">
          <p className="text-3xl w-fit mx-auto">Our featured products</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
