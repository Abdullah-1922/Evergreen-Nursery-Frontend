import { Pagination } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import { updatePaginateInfo } from "../../../redux/features/paginate/paginateSlice";

const PaginationTool = ({ totalPage }: { totalPage: number }) => {
  const dispatch = useAppDispatch();
  return (
    <Pagination
      pageSize={9}
      onChange={(page, pageSize) => {
        const paginateInfo = {
          page: page,
          limit: pageSize,
        };
        dispatch(updatePaginateInfo(paginateInfo));
      }}
      total={totalPage}
    />
  );
};

export default PaginationTool;
