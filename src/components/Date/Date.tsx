import { FC } from "react";

/**
 * Not a good name... For "created at" and "updated at". 
 * Passing block number as well... not completely sure how to display it.
 */
const DateTime: FC<{
    subgraphTimestamp: number, blockNumber: number 
}> = ({ subgraphTimestamp, blockNumber }) => {
    const date = new Date(subgraphTimestamp * 1000);
    return (
        <>{date.toLocaleDateString()}</>
    );
};

export default DateTime;