import {
  Box,
  CircularProgress,
  styled,
  TableCell,
  TableRow,
} from "@mui/material";
import { FC } from "react";

const LoaderBackdrop = styled(Box)<{ isLoading: boolean }>(
  ({ theme, isLoading }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(35,35,35, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    opacity: isLoading ? 1 : 0,
    visibility: isLoading ? "visible" : "hidden",
    transition: "all 200ms ease-in-out",
  })
);

interface TableLoaderProps {
  isLoading: boolean;
  showSpacer?: boolean;
  minHeight?: string;
}

const TableLoader: FC<TableLoaderProps> = ({
  isLoading,
  showSpacer,
  minHeight = "96px",
}) => (
  <>
    {showSpacer && isLoading && (
      <TableRow>
        <TableCell sx={{ height: minHeight }}></TableCell>
      </TableRow>
    )}
    <LoaderBackdrop isLoading={isLoading}>
      <CircularProgress />
    </LoaderBackdrop>
  </>
);

export default TableLoader;
