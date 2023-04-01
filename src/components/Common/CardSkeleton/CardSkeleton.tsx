import { Box, Skeleton } from "@mui/material";
import React from "react";
interface ICardSkeleton {
  numberOfCards?: number;
}

const CardSkeleton: React.FC<ICardSkeleton> = (props) => {
  const { numberOfCards = 4 } = props;
  return (
    <>
      {Array.from(new Array(numberOfCards)).map(
        (cardNumber: number, index: number) => (
          <Box key={index}>
            <Skeleton variant="rectangular" width={250} height={150} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        )
      )}
    </>
  );
};

export default CardSkeleton;
