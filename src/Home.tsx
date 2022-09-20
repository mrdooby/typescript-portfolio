import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";
import images from "./assets/homeAssets";

// styled components
const fadeInAnimation = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
   }
`;

const HomeContainer = styled.div`
  display: flex;
  height: calc(100vh - 5em);
  width: 100%;
  flex-direction: column;
`;

const PetImg = styled.img`
  display: flex;
  object-fit: cover;
  height: 100%;
  width: 100%;
  animation: ${fadeInAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const Message = styled.div`
  position: absolute;
  color: white;
  font-size: 7em;
  bottom: 0;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: bold;
  letter-spacing: -1px;
  margin-left: 10px;
  text-shadow: 0 0 5px #000;
`;

function Home() {
  return (
    <HomeContainer>
      <Grid
        container
        spacing={0}
        height="100%"
        overflow="hidden"
        border="solid black"
      >
        {images.map((item: any) => (
          <Grid container item md={3} height="25%">
            <PetImg src={item} alt="pet photos" loading="lazy" />
          </Grid>
        ))}
      </Grid>
      <Message>hello nice to meet you!</Message>
    </HomeContainer>
  );
}

export default Home;
