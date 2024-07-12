/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../redux/api/baseApi";

import { useAppSelector } from "../../../redux/hooks";

import { useEffect, useState } from "react";
import PaginationTool from "../pagination/Pagination";
import { Button } from "antd";
import Swal from "sweetalert2";
import UpdateModel from "./UpdateModel";

const ManageProducts = () => {
  const paginateInfo = useAppSelector((state) => state.paginateSlice);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();
  useEffect(() => {
    const query = new URLSearchParams();
    console.log(paginateInfo);
    query.append("page", paginateInfo.page.toString());
    query.append("limit", paginateInfo.limit.toString());
    setQuery(query.toString());
  }, [paginateInfo]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (productData:any) => {
    setModalData(productData);
    showModal();
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Product!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(id);

        if (isSuccess) {
          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const { data } = useGetProductsQuery(query);

  return (
    <div>
      <div className="relative  overflow-x-auto">
        <table className="w-full  text-left  font-semibold">
          <thead className=" text-white uppercase bg-[#4d6429]">
            <tr>
              <th scope="col" className="px-6 py-3">
                image
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                stock
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                rating
              </th>
              <th scope="col" className="px-6 py-3">
                brand
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((product: any, ind: number) => {
              return (
                <tr key={ind} className="bg-[#DCFFCB] border-b">
                  <td
                    scope="row"
                    className=" font-medium w-24 h-24 text-gray-900 "
                  >
                    <img
                      className="   rounded-full "
                      src={product.image}
                      alt={product.name}
                    />
                  </td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">
                    {product.description.substring(0, 50)}
                  </td>

                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-lg">$</span>
                    {product.price}
                  </td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">{product.status}</td>
                  <td className="px-6 py-4">{product.rating}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">
                    <Button
                      onClick={() => handleUpdate(product)}
                      className="font-bold"
                    >
                      Update
                    </Button>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white font-bold"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-fit py-3 mx-auto">
        <PaginationTool totalPage={data?.meta?.total} />
      </div>
      <UpdateModel
        productData={modalData}
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default ManageProducts;
