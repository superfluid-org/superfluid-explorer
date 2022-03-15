import { PaginationItem, Stack } from "@mui/material";
import times from "lodash/times";
import { FC } from "react";

const DEFAULT_SIBLING_COUNT = 1;

interface InfinitePaginationProps {
  activePage: number;
  hasNext: boolean;
  siblings?: number;
  onChange: (newPage: number) => void;
}

const InfinitePagination: FC<InfinitePaginationProps> = ({
  activePage,
  hasNext,
  siblings = DEFAULT_SIBLING_COUNT,
  onChange,
}) => {
  const renderedPages = Math.max(Math.min(siblings + 1, activePage - 2), 0);
  const lastHiddenPage = activePage - renderedPages;

  const onPageClick = (page: number) => () => onChange(page);

  return (
    <Stack direction="row" alignItems="center">
      <PaginationItem
        type="previous"
        disabled={activePage === 1}
        onClick={onPageClick(activePage - 1)}
      />

      {lastHiddenPage >= 1 && (
        <PaginationItem
          page={1}
          selected={activePage === 1}
          onClick={onPageClick(1)}
        />
      )}

      {lastHiddenPage === 2 && (
        <PaginationItem
          page={2}
          selected={activePage === 2}
          onClick={onPageClick(2)}
        />
      )}

      {lastHiddenPage > 2 && <PaginationItem type="start-ellipsis" />}

      {times(renderedPages).map((i) => (
        <PaginationItem
          key={lastHiddenPage + i + 1}
          page={lastHiddenPage + i + 1}
          selected={activePage === lastHiddenPage + i + 1}
          onClick={onPageClick(lastHiddenPage + i + 1)}
        />
      ))}

      {hasNext && (
        <>
          <PaginationItem key={activePage + 1} page={activePage + 1} />
          <PaginationItem type="end-ellipsis" />
        </>
      )}

      <PaginationItem
        type="next"
        disabled={!hasNext}
        onClick={onPageClick(activePage + 1)}
      />
    </Stack>
  );
};

export default InfinitePagination;
