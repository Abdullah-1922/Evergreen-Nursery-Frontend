/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../../redux/features/Category/categoryApi";
import Swal from "sweetalert2";

const ManageCategory = () => {
  const [categoryArray, setCategoryArray] = useState([]);
  

  const { data } = useGetCategoryQuery(undefined);
  const [updateCategory] = useUpdateCategoryMutation();
const [createCategory]=useCreateCategoryMutation()

  useEffect(() => {
    setCategoryArray(data?.data[0]?.category);
  }, [data]);

  const handleRemoveCategory = (cat: any) => {
    const newArray = categoryArray.filter((data) => data !== cat);
    console.log(newArray);
    setCategoryArray(newArray);
  };
  const updatedCategory = async () => {
    const result = await updateCategory({ category: categoryArray });
    console.log(result);
    if (result.data?.success) {
    return  Swal.fire({
        title: "Category updated successfully",
      });
    }
  };
  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    const regex = / {2,}/;
    
    let categoryValue = (e.target.category.value)
  const isMoreSpace =  regex.test(categoryValue)
  if(isMoreSpace){
   return Swal.fire({
      icon:'error',
      title:'Can not use than one space in row.'
      
    });
  }
    
   categoryValue = (categoryValue.toLowerCase().toString().replaceAll(' ','-'));
    const result = await createCategory({category:categoryValue})
    console.log(result);
    if(result?.data.success){
       Swal.fire({
         icon:'success',
         title:'Category created successfully'
         
       });
     }
  
    e.target.category.value=''
  }
  return (
    <div>
      <div className="mt-10 mx-auto lg:w-3/4 h-[500px] bg-[#dcffcb]">
        <p className="text-3xl text-center font-bold p-3">
          Category Management
        </p>

        <div>
          <p className="text-lg font-bold  pl-4"> categories :</p>
          <div className="flex flex-wrap px-4 justify-center mt-2 gap-4">
            {categoryArray?.map((cat, ind) => {
              return (
                <div
                  key={ind}
                  className="items-center  gap-2 font-bold border-black p-1 px-2 rounded-xl border-2  flex"
                >
                  <p className="uppercase">{cat}</p>
                  <button
                    onClick={() => handleRemoveCategory(cat)}
                    className=""
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/emoji/48/cross-mark-button-emoji.png"
                      alt="cross-mark-button-emoji"
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <div className={`flex gap-3 mt-4 justify-center ${categoryArray === data?.data[0]?.category ? 'hidden' :'' }` }>
            <button
              onClick={() => {
                return setCategoryArray(data?.data[0]?.category);
              }}
              className=" p-1 px-5 rounded-xl font-bold bg-red-600 text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => updatedCategory()}
              className=" p-1 px-5 rounded-xl font-bold bg-green-600 text-white"
            >
              Done
            </button>
          </div>



        </div>

        <div className="mt-10">
         <p className="text-lg font-bold  my-3 pl-4">Create Category :</p> 
         <form onSubmit={(e)=>handleSubmit(e)}  className="flex gap-2 justify-center">

            <input
            name="category"
            placeholder="Category Name"
             type="text"  className="py-1 px-2 mx-3 w-full rounded-2xl placeholder:text-black/60 placeholder:text-lg placeholder:font-semibold placeholder:pl-2  text-lg font-semibold pl-4 md:w-3/4 lg:w-1/2 focus:border-2 focus:border-black"/>


         <button type="submit"    className=" p-1 px-5 rounded-xl font-bold bg-green-600 text-white">Submit</button>
         </form>
      
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
