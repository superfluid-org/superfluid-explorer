import LinkIcon from "@mui/icons-material/Link";
import { IconButton, SvgIconProps, Tooltip, TooltipProps } from "@mui/material";
import { FC, useEffect, useState } from "react";
import copyTextToClipboard from "../utils/copyTextToClipboard";

/**
 * Inspired by: https://blog.logrocket.com/implementing-copy-to-clipboard-in-react-with-clipboard-api/
 */
const CopyLink: FC<{
  localPath: string;
  TooltipProps?: Partial<TooltipProps>;
  IconProps?: Partial<SvgIconProps>;
}> = ({ localPath, TooltipProps, IconProps }) => {
  const [absoluteUrl, setAbsoluteUrl] = useState<string>("");

  useEffect(() => {
    setAbsoluteUrl(new URL(localPath, document.baseURI).href);
  }, [localPath]);

  const [isCopied, setIsCopied] = useState(false);

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(absoluteUrl)
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
      title={isCopied ? "Link copied!" : "Copy link to clipboard"}
      {...TooltipProps}
    >
      <IconButton>
        <LinkIcon {...IconProps} onClick={handleCopyClick} />
      </IconButton>
    </Tooltip>
  );
};

export default CopyLink;
