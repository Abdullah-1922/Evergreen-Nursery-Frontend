// const Card = () => {
//   return (
//     <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">

import { Rate, Tag } from "antd";

//       <img className="rounded-[50px] h-[500px] w-[400px]" src="https://www.thetreecenter.com/c/uploads/2014/06/red-rocket-crape-1-340x453.webp" alt="" />
//       <p className="cardtxt font-semibold text-gray-400 tracking-wider group-hover:text-gray-700 text-xl">
//         Calathea Orbifolia
//       </p>
//       <p className="blueberry font-semibold text-gray-700 text-xs">
//         One of Kind & Unique Plants Collection Here at SMKY.
//       </p>
//       <div className="ordernow flex flex-row justify-between items-center w-full">
//         <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
//           $21.00
//         </p>
//         <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
//           Order Now
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;

export type TItem = {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  rating: number;
  brand: string;
  status: "OUT-OF-STOCK" | "IN-STOCK";
  isDeleted: boolean;
};

// name: string;
//   description: string;
//   price: number;
//   category: TCategory;
//   stock: number;
//   image: string;
//   rating:number;
//   brand:string;
//   status: "OUT-OF-STOCK" | "IN-STOCK";  after:bg-[#abd373]

const Card = ({ item }: { item: TItem }) => {
  const {
    name,
    description,
    price,
    category,
    // stock,
    image,
    rating,
    // brand,
    status,
  } = item;

  return (
    <div className="m-2 pb-10 group px-10 py-5 bg-white/10  rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#D7EEB3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden  after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
      <div className="flex flex-col  justify-evenly  ">
        <div className="  mx-auto max-h-[500px] max-w-[400px]">
          <img
            className="rounded-[50px]"
            src={image}
            alt=""
          />
        </div>

        <div className="mt-10  ">
          <p className=" font-bold  text-[#4d6429] tracking-wider group-hover:text-black text-3xl">
            {name}
          </p>
          <p className=" font-semibold  text-[#4d6429] tracking-wider group-hover:text-black  text-xl">
            {category}
          </p>
          <p className="blueberry font-semibold mt-4 group-hover:text-black  ">
            {description}
          </p>
          <div className="mt-6 ">
            <Rate count={5} defaultValue={rating} disabled></Rate>
            <div className="flex items-center mt-2 gap-3">
              <p className="text-lg text-[#4d6429]  font-semibold group-hover:text-black">
                ${price}
              </p>
              <p>
                <Tag className="font-bold">{status}</Tag>
              </p>
            </div>
            <div className=" flex mt-5 flex-row justify-between items-center w-full">
              <p className=" hover:scale-110 transition delay-125 lg:inline-flex items-center group-hover:text-white text-white gap-3 group-hover:bg-black bg-[#4d6429] shadow-[10px_10px_150px_#4d6429] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full ">
                Order Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// card details page info

{
  /* <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#4d6429] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden  after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
<div className="flex flex-col lg:flex-row justify-evenly  lg:gap-5">
  <div className=" lg:w-1/3 ">
    <img
      className="rounded-[50px] mx-auto h-[500px] w-[400px]"
      src="https://www.thetreecenter.com/c/uploads/2014/06/red-rocket-crape-1-340x453.webp"
      alt=""
    />
  </div>

  <div className="mt-10 lg:mt-24 lg:w-2/3">
    <p className=" font-bold  text-[#4d6429] tracking-wider group-hover:text-black text-3xl">
      Calathea Orbifol name
    </p>
    <p className=" font-semibold  text-[#4d6429] tracking-wider group-hover:text-black  text-xl">
      Calathea Orbi category
    </p>
    <p className="blueberry font-semibold mt-4 group-hover:text-black  ">
      One of Kind & Unique Plants Collection Here at SMKY Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ullam reiciendis sed
      eum consequatur earum asperiores quidem, totam ipsam voluptatibus
      dolorum quod repellendus eaque vitae cumque esse voluptatem. Animi,
      itaque ea Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Dolor iure cum minus maxime odit laboriosam ipsum reiciendis
      accusantium sequi totam!
    </p>
    <div className="mt-6 lg:mt-14">
      <Rate count={5} defaultValue={5} disabled></Rate>
      <div className="flex items-center mt-2 gap-3">
        <p className="text-lg text-[#4d6429]  font-semibold group-hover:text-black">
          $21.00
        </p>
        <p>
          <Tag className="font-bold">In Stock</Tag>
        </p>
      </div>
      <div className=" flex mt-5 flex-row justify-between items-center w-full">
        <p className=" lg:inline-flex items-center group-hover:text-black text-white gap-3 group-hover:bg-white/10 bg-[#4d6429] shadow-[10px_10px_150px_#4d6429] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full ">
          Order Now
        </p>
      </div>
    </div>
  </div>
</div>
</div> */
}
