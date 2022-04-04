import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Tooltip, TooltipProps } from "@mui/material";
import { FC, useState } from "react";
import copyTextToClipboard from "../utils/copyTextToClipboard";

interface CopyIconBtnProps {
  copyText: string;
  description?: string;
  TooltipProps?: Partial<TooltipProps>;
}
const CopyIconBtn: FC<CopyIconBtnProps> = ({
  copyText,
  description = "Copy to clipboard",
  TooltipProps,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  /**
   * onClick handler function for the copy button
   * that will asynchronously call copyTextToClipboard
   */
  const handleCopyClick = () =>
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch(console.log);

  return (
    <Tooltip title={isCopied ? "Copied!" : description} {...TooltipProps}>
      <IconButton onClick={handleCopyClick}>
        <ContentCopyIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CopyIconBtn;
