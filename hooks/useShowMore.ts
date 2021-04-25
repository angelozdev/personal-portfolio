import * as React from "react";

function useShowMore(
  initialTechnologiesLength = 4,
  technologiesLength: number
): [number, () => void] {
  const [showMore, setShowMore] = React.useState<number>(
    initialTechnologiesLength
  );

  const handleClick = () => {
    if (technologiesLength > showMore) {
      setShowMore(technologiesLength);
    } else {
      setShowMore(initialTechnologiesLength);
    }
  };

  return [showMore, handleClick];
}

export default useShowMore;
