import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";

const LoadingGrid = () => {
  return (
    <Card height="357px" width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" justifyContent="center" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default LoadingGrid;
