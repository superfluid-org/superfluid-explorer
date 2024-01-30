import {
  MenuItem,
  PaginationItem,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Theme,
  Typography
} from '@mui/material'
import times from 'lodash/times'
import { FC } from 'react'

const DEFAULT_SIBLING_COUNT = 1
const DEFAULT_PAGE_SIZE = 10

interface InfinitePaginationProps {
  page: number
  hasNext: boolean
  isLoading?: boolean
  pageSize?: number
  siblingCount?: number
  sx?: SxProps<Theme>
  onPageChange: (newPage: number) => void
  onPageSizeChange?: (newPageSize: number) => void
}

const InfinitePagination: FC<InfinitePaginationProps> = ({
  page,
  hasNext,
  isLoading = false,
  pageSize = DEFAULT_PAGE_SIZE,
  siblingCount = DEFAULT_SIBLING_COUNT,
  sx,
  onPageChange,
  onPageSizeChange
}) => {
  const trailingSiblings = Math.min(siblingCount, page - 1)
  const lastHiddenPage = page - trailingSiblings

  const onPageClick = (newPage: number) => () => onPageChange(newPage)

  const handlePageSizeChange = (e: SelectChangeEvent<number>) =>
    onPageSizeChange && onPageSizeChange(Number(e.target.value))

  return (
    <Stack direction="row" alignItems="center" sx={sx} spacing={2}>
      {onPageSizeChange && (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2">Per page:</Typography>
          <Select
            disableUnderline
            variant="standard"
            size="small"
            value={pageSize}
            onChange={handlePageSizeChange}
            sx={{
              '.MuiSelect-select': {
                padding: '4px 32px 4px 4px'
              }
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </Stack>
      )}

      <Stack direction="row" alignItems="center">
        <PaginationItem
          type="previous"
          disabled={page === 1}
          onClick={onPageClick(page - 1)}
        />

        {lastHiddenPage > 1 && (
          <PaginationItem page={1} onClick={onPageClick(1)} />
        )}

        {lastHiddenPage === 3 && (
          <PaginationItem page={2} onClick={onPageClick(2)} />
        )}

        {lastHiddenPage > 3 && <PaginationItem type="start-ellipsis" />}

        {times(trailingSiblings).map((i) => (
          <PaginationItem
            key={i}
            page={page - trailingSiblings + i}
            onClick={onPageClick(page - trailingSiblings + i)}
          />
        ))}

        <PaginationItem selected page={page} />

        {hasNext && (
          <>
            <PaginationItem
              page={page + 1}
              onClick={onPageClick(page + 1)}
              disabled={isLoading}
            />
            <PaginationItem type="end-ellipsis" />
          </>
        )}

        <PaginationItem
          type="next"
          disabled={!hasNext || isLoading}
          onClick={onPageClick(page + 1)}
        />
      </Stack>
    </Stack>
  )
}

export default InfinitePagination
