import NextLink from 'next/link';
import { FC, memo } from 'react';
import Block from './Blockies';
import { Typography, Box } from '@mui/material';
import { Network } from "../../redux/networks";
import ellipsisAddress from '../../utils/ellipsisAddress';

interface UserBlockProps {
    network: Network;
    address: string;
}

const UserBlock:FC<UserBlockProps> = ({ network, address }) => {
  return (
    <NextLink
        href={`/${network.slugName}/accounts/${address}?tab=streams`}
        passHref
    >
        <Box>
        <Block address={address}/>
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="h2">
            {ellipsisAddress(address)}
        </Typography>
        </Box>
    </NextLink>
    )
}

export default memo(UserBlock);
