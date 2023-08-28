import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  let bgColor =
    criticScore > 80
      ? "green.500"
      : criticScore > 45
      ? "yellow.500"
      : "gray.500";

  return (
    <Badge fontSize={14} px={2} bg={bgColor} borderRadius="4px">
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
