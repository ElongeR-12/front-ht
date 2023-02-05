import React from "react";
import DetailsButton from "./DetailsButton";
import DetailsToogle from "./DetailsToogle";

const DetailsToogleAndButtonContainer = () => {
  const [seeMore, setSeeMore] = React.useState(false);
  return (
    <>
      <DetailsButton seeMore={seeMore} setSeeMore={setSeeMore} />
      <DetailsToogle seeMore={seeMore} />
    </>
  );
};

export default DetailsToogleAndButtonContainer;
