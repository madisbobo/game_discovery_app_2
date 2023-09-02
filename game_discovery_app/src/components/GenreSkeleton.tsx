import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack spacing={3}>
      <Skeleton boxSize="32px" borderRadius="8px" />
      <SkeletonText />
    </HStack>
  );
};

export default GenreSkeleton;
