import { useForm, SubmitHandler } from "react-hook-form";
import { CategorySelectForm } from "../sidebar/sidebar.constant";
import { useCreateProductMutation } from "../../../redux/api/baseApi";

import Swal from "sweetalert2";

export type Inputs = {
  name: string;
  category: string;
  rating: number;
  image: string;
  stock: number;
  description: string;
  price: number;
  brand: string;
};

const CreateProduct = () => {
  const [createProduct, { error, isLoading }] = useCreateProductMutation();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await createProduct({
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
      rating: Number(data.rating),
    });
    console.log(res);

    if (res.data.data._id) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Product create failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <p className="text-center text-3xl text-[#4d6429] md:text-4xl lg:text-5xl font-bold ">
        Create product
      </p>
      <div className="lg:w-4/5 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" max-4/5 mx-auto p-6 bg-white shadow-md rounded-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="mt-1 block text-lg border-2 py-1  pl-3 rounded-xl w-full border-gray-300  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-600 font-medium"
            >
              Category
            </label>
            <select
              id="category"
              {...register("category", { required: true })}
              className="mt-1  text-lg border-2 py-1  pl-3 rounded-xl   block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {CategorySelectForm}
            </select>
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-600 font-medium">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              {...register("rating", { required: true, min: 0, max: 5 })}
              className="mt-1  text-lg border-2 py-1  pl-3 rounded-xl  block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.rating && errors.rating.type === "required" && (
              <span className="text-red-500">Rating is required</span>
            )}
            {errors.rating &&
              (errors.rating.type === "min" ||
                errors.rating.type === "max") && (
                <span className="text-red-500">
                  Rating must be between 0 and 5
                </span>
              )}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600 font-medium">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              {...register("image", { required: true })}
              className="mt-1 block  text-lg border-2 py-1  pl-3 rounded-xl  w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.image && (
              <span className="text-red-500">Image URL is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block text-gray-600 font-medium">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              {...register("stock", { required: true, min: 0 })}
              className="mt-1 block  text-lg border-2 py-1  pl-3 rounded-xl  w-full border-gray-300  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.stock && errors.stock.type === "required" && (
              <span className="text-red-500">Stock is required</span>
            )}
            {errors.stock && errors.stock.type === "min" && (
              <span className="text-red-500">
                Stock must be greater than or equal to 0
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              rows={4}
              className="mt-1  text-lg border-2 py-1  pl-3 rounded-xl  block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600 font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true, min: 0 })}
              className="mt-1  text-lg border-2 py-1  pl-3 rounded-xl  block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.price && errors.price.type === "required" && (
              <span className="text-red-500">Price is required</span>
            )}
            {errors.price && errors.price.type === "min" && (
              <span className="text-red-500">
                Price must be greater than or equal to 0
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-gray-600 font-medium">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              {...register("brand", { required: true })}
              className="mt-1 block  text-lg border-2 py-1  pl-3 rounded-xl  w-full border-gray-300  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.brand && (
              <span className="text-red-500">Brand is required</span>
            )}
          </div>

          <div className="mt-6">
            <button
              disabled={isLoading}
              type="submit"
              className="py-2 px-4 bg-[#4d6429] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
