import { useNavigate } from "react-router-dom";

const HomePageCategory = () => {
    const navigate =useNavigate()
  return (
    <section>
    <div className="flex w-[80%] mx-auto py-28 gap-5 lg:gap-10 flex-col xl:flex-row">
      <div className="bg-white border-2 p-5 flex-1  rounded-xl shadow-sm sm:flex">
        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none xl:max-w-xs xl:w-[200px] ">
          <img
            className="size-full absolute top-0 start-0 object-cover"
            src="https://i.ibb.co/5r4X1JJ/slider-2-removebg-preview.png"
            alt="Image Description"
          />
        </div>
        <div className="flex my-auto  ">
          <div className="p-4 flex flex-col   h-full sm:p-7">
            <h3 className="text-2xl font-bold text-gray-800">
              Office plants
            </h3>
            <p className="mt-1 font-semibold text-gray-500">
              Plants in office make employ to focus word.
            </p>
            <div className="mt-5 ">
              <p
                onClick={() => {
                  navigate("/products?category=offices");
                }}
                className="underline cursor-pointer text-blue-600"
              >
                See all Office plants
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dcffcb] flex-1 border rounded-xl shadow-sm sm:flex">
        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none xl:max-w-xs xl:w-[200px] ">
          <img
            className="size-full absolute top-0 start-0 object-cover"
            src="https://i.ibb.co/5r4X1JJ/slider-2-removebg-preview.png"
            alt="Image Description"
          />
        </div>
        <div className="flex my-auto  ">
          <div className="p-4 flex flex-col   h-full sm:p-7">
            <h3 className="text-2xl font-bold text-gray-800">
              Home plants
            </h3>
            <p className="mt-1 font-semibold text-gray-500">
              Home plants make your house more beautyfull
            </p>
            <div className="mt-5 ">
              <p
                onClick={() => {
                  navigate("/products?category=home");
                }}
                className="underline cursor-pointer text-blue-600"
              >
                See all home plants
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HomePageCategory;