import { NavLink } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="bg-[#dcffcb] ">
    <div className="w-full h-1 bg-[#4d6429] "></div>
    <div className="md:grid  flex flex-col-reverse max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
      <div className="mr-auto place-self-center md:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-black">
          Love Green , Love Nature
        </h1>
        <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl  text-black">
          Make your house full with green
        </p>
        <NavLink to={"/products"}>
          <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-[#4d6429] text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            See products
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </NavLink>
      </div>
      <div className=" lg:mt-0 md:col-span-5  flex">
        <img
          src="https://i.ibb.co/5r4X1JJ/slider-2-removebg-preview.png"
          alt="mockup"
        />
      </div>
    </div>
  </section>
  );
};

export default HeroSection;