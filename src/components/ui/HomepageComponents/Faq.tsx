import { useState } from "react";

const Faq = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
  
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);

  return (
    <section>
     <div className="px-10 py-20">
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            onClick={toggle1}
          >
            <span>How to take care of indoor plants?</span>
            <i
              className={`absolute right-0 pt-1 text-xs ${isOpen1 ? 'fas fa-minus' : 'fas fa-plus'}`}
            ></i>
          </button>
        </h6>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen1 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Indoor plants require proper watering, adequate light, and occasional fertilization to thrive indoors.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            onClick={toggle2}
          >
            <span>Best plants for low light conditions?</span>
            <i
              className={`absolute right-0 pt-1 text-xs ${isOpen2 ? 'fas fa-minus' : 'fas fa-plus'}`}
            ></i>
          </button>
        </h6>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen2 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Plants like snake plants and pothos thrive in low light conditions and are perfect for indoor settings.
          </div>
        </div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            onClick={toggle3}
          >
            <span>Benefits of having plants indoors?</span>
            <i
              className={`absolute right-0 pt-1 text-xs ${isOpen3 ? 'fas fa-minus' : 'fas fa-plus'}`}
            ></i>
          </button>
        </h6>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen3 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Indoor plants improve air quality, reduce stress levels, and add a touch of nature to your living space.
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Faq;