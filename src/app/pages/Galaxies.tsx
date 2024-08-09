/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { GalaxiesLayout } from "../components/GalaxiesLayout";
import { LoadingSpinner } from "../components/LoadingSpinner";

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`;

export const Galaxies = (props) => {
  // const { galaxies, requestStatus } = useFetchGalaxiesInfo()

  const renderLayout = () => {
    if (props.galaxies.length === 0) return <LoadingSpinner />;
    // if (props.galaxies === ERROR_STATUS) return <h1>Error</h1>
    return <GalaxiesLayout galaxies={props.galaxies} />;
  };

  return (
    <GalaxiesPageWrapper>
      <h1>Galaxias</h1>
      {renderLayout()}
    </GalaxiesPageWrapper>
  );
};

Galaxies.defaultProps = {
  galaxies: [],
};
