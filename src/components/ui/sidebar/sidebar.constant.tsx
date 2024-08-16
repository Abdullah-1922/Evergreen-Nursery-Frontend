/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useGetCategoryQuery } from "../../../redux/features/Category/categoryApi";

export const CategorySelectForm = (): ReactNode => {
  const { data, isLoading, isError } = useGetCategoryQuery(undefined);
  

  if (isLoading) {
    return <option>Loading categories...</option>;
  }

  
  if (isError || !data?.data[0].category?.length) {
    return <option>No categories available</option>;
  }

  return data?.data[0].category.map((cat: string) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ));
};

export const useCategoryOptions = () => {
  const { data, isLoading, isError } = useGetCategoryQuery(undefined);

  if (isLoading) {
    return [{ value: "", label: "Loading categories..." }];
  }

  if (isError || !data?.data[0]?.category?.length) {
    return [{ value: "", label: "No categories available" }];
  }

  const categories = ['Default',...data.data[0].category];

  return categories.map((category: string) => ({
    value: category,
    label: category.toUpperCase(),
  }));
};