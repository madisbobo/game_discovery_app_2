import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText
} from "@chakra-ui/react";

const LoadingGrid = () => {
  return (
    <Card height="340px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" justifyContent="center" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default LoadingGrid;
