import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <InfinitySpin
        visible={true}
        width="200"
        color="#3470ff"
        ariaLabel="infinity-spin-loading"
      />
    </StyledLoader>
  );
};

export default Loader;
