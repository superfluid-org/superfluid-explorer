import { FC, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, SvgIconProps, Tooltip, TooltipProps } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import _ from "lodash";

/**
 * Inspired by: https://blog.logrocket.com/implementing-copy-to-clipboard-in-react-with-clipboard-api/
 */
const ClipboardCopy: FC<{
  copyText: string;
  TooltipProps?: Partial<TooltipProps>;
  IconProps?: Partial<SvgIconProps>;
}> = ({ copyText, TooltipProps, IconProps }) => {
  const [isCopied, setIsCopied] = useState(false);

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
      <Tooltip
        {..._.merge(
          {
            title: isCopied ? "Copied!" : "Copy to clipboard",
          },
          TooltipProps
        )}
      >
        <ContentCopyIcon
          onClick={handleCopyClick}
          {..._.merge(
            {
              sx: { fontSize: "small", cursor: "pointer", ml: 0.5 },
            },
            IconProps
          )}
        />
      </Tooltip>
  );
};

export default ClipboardCopy;

async function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}
