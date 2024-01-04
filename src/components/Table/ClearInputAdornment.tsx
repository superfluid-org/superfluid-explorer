import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { FC } from "react";

interface ClearInputAdornmentProps {
  onClick: () => void;
}

const ClearInputAdornment: FC<ClearInputAdornmentProps> = ({ onClick }) => (
  <IconButton
    size="small"
    sx={{ fontSize: "16px", p: 0.5 }}
    tabIndex={-1}
    onClick={onClick}
  >
    <CloseIcon fontSize="inherit" />
  </IconButton>
);

export default ClearInputAdornment;
