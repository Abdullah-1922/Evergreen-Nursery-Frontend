// import { Header } from "antd/es/layout/layout";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";

// const MainNavbar = () => {
//   return (
//     <div className="bg-blue-500 h-32  max-w-[1400px] mx-auto">
//       {/* Your main navbar content */}
//     </div>
//   );
// };

// const SecondaryNavbar = () => {
//   return (
//     <div className="bg-green-500 h-24 max-w-[1400px] mx-auto">
//       {/* Your secondary navbar content */}
//     </div>
//   );
// };

const Navbar = () => {
  // const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //     if (window.scrollY > 60) {
  //       setShowSecondaryNavbar(true);
  //     } else {
  //       setShowSecondaryNavbar(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Header className="bg-[#DCFFCB] flex  justify-center   md:justify-between items-center h-16">
      <div className="hidden md:flex">
        <a href="/">
          <p className="font-extrabold  font-serif text-lg">AAK_PLANT</p>{" "}
        </a>
      </div>
      <div className="flex   gap-3 sm:gap-5 md:gap-7 lg:gap-14">
        <NavLink to={"/"}>
          <div className="relative  mt-2">
            <h1 className=" text-sm sm:text-lg md:text-xl lg:text2xl font-bold after:content-[''] after:bg-black after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 after:absolute hover:after:w-[100%] ">
              Home
            </h1>
          </div>
        </NavLink>
        <NavLink to={"/products"}>
          <div className="relative  mt-2">
            <h1 className="text-sm sm:text-lg  md:text-xl lg:text2xl  font-bold after:content-[''] after:bg-black after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 after:absolute hover:after:w-[100%] ">
              Product
            </h1>
          </div>
        </NavLink>
        <NavLink to={"/management"}>
          <div className="relative  mt-2">
            <h1 className="text-sm sm:text-lg  md:text-xl lg:text2xl  font-bold after:content-[''] after:bg-black after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 after:absolute hover:after:w-[100%] ">
              Management
            </h1>
          </div>
        </NavLink>

        <NavLink to={"/cart"}>
          <div className="w-[30px] h-[30px] md:w-[44px] md:h-[44px] text-[#4d6429] relative top-1   hover:scale-110">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3ElEQVR4nO2XP0sDMRiHf4ro6izqB3ARHNpBFEG4okJvUsF20cniHxTEReUG0bwngpSaHH4AHfwAbq7iJDgJjlp111EhkquDhTrYJpcG7oEsBy/5PXnfBA5ISUlJaR9KhRmUClWsLUqEOxKCJDj7AmeP4LSNIOhCW7NcfEapKOO1vlgTqF8XcFxAQlAObcvywlQsocIf7TYW4HQOp4gORv/ohJ0VseH/CUjZAUFP1oOL+EG5aq4LnJWthxckcRpONicgwjHr4QW7j6ehKYKgE4K9WB6fIlqCs4q98FTFZdDdmsApG7cosIWWUWPE6dXC6Lzj5KQXWhCMWzj9Y2gjYhMJC3zijAb1CcSvUaKnfw7tJClQCUfcFeB0rT98kgLR4bS7Apwe4vvmrIBgS2bCJyLA3lAu97gpwKkKfuiZC99IwDmE6wKcvdcJlKkfTiHotn5u2RX4/gCcIaJV4y+RUdSfEac7dwUUlbDPqEQiqE4ItgJONxD04Z7AD0Ozs91ZLx9mvfxrJue/ZHJ5Ut9guFYbatNszpe/l/pmulYb6vTUxvObe3Juc68WxPPfTNdqQ7VebawCzG3UQmQ8v2q6VhuNx8Bnpmu1oS6dClK7hP+/xJkma1NSUlLQFnwDX7MckiLnGesAAAAASUVORK5CYII=" />
          </div>
        </NavLink>
      </div>
    </Header>

    // <div className=" flex justify-center max-w-[1280px] mx-auto  ">
    //   <div
    //     className={`fixed w-full ${
    //       showSecondaryNavbar
    //         ? "-translate-y-32 transition-transform duration-500"
    //         : "translate-y-0"
    //     }`}
    //     style={{ transition: showSecondaryNavbar ? "transform 0.5s" : "none" }}
    //   >
    //     <MainNavbar />
    //   </div>
    //   <div
    //     className={`fixed w-full transition-transform ${
    //       showSecondaryNavbar
    //         ? "transform translate-y-0 duration-700"
    //         : "transform -translate-y-24 duration-0"
    //     }`}
    //   >
    //     <SecondaryNavbar />
    //   </div>
    // </div>
  );
};

export default Navbar;
