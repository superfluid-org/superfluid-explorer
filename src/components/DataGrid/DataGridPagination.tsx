import { Pagination } from "@mui/material";

function DataGridPagination(
  count: number,
  page: number,
  setPage: (page: number) => void
) {
  return (
    <Pagination
      color="primary"
      count={count}
      page={page}
      onChange={(event, value) => setPage(value)}
    />
  );
}

export default DataGridPagination;
