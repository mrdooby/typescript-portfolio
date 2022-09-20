import React from "react";
import { Container, Grid, Box } from "@mui/material";
import styled from "styled-components";
import images from "./assets/projectsAssets";

// styled components
const FECImg = styled.img`
  display: flex;
  object-fit: contain;
  width: 80%;
  border: solid yellow;
`;

const FECText = styled.div`
  display: flex;
`;

const FECTech = styled.div`
  display: flex;
`;

const SDCImg = styled.img`
  display: flex;
  object-fit: contain;
  width: 80%;
  float: right;
  border: solid yellow;
`;

const SDCText = styled.div`
  display: flex;
`;

const SDCTech = styled.div`
  position: relative;
  bottom: 0;
`;

const VSImg = styled.img`
  object-fit: contain;
  width: 30%;
  border: solid yellow;
  left: 40%;
`;

// const VSText = styled.div`
//   display: flex;
// `;

// const VSTech = styled.div`
//   display: flex;
// `;

function Projects() {
  return (
    <Container maxWidth="lg">
      <Grid container width="100%" border="solid black" spacing={2}>
        <Grid container item border="solid blue">
          <Box
            sx={{
              border: "solid pink",
              position: "relative",
              flexDirection: "row",
              right: 0,
            }}
          >
            <FECImg src={images[0].image} alt={images[0].title} />
            <Box
              sx={{
                border: "solid green",
                position: "relative",
                bottom: 0,
                width: "40%",
                height: "auto",
                backgroundColor: "white",
              }}
            >
              <FECTech>{images[0].tech}</FECTech>
            </Box>
            <Box
              sx={{
                border: "solid green",
                position: "absolute",
                bottom: 0,
                right: "0%",
                width: "40%",
                height: "20%",
                backgroundColor: "white",
              }}
            >
              <FECText>{images[0].description}</FECText>
            </Box>
          </Box>
        </Grid>
        {/* SDC */}
        <Grid container item border="solid blue">
          <Box
            sx={{
              display: "flex",
              border: "solid pink",
              position: "relative",
              flexDirection: "column",
              width: "100%",
              alignItems: "flex-end",
            }}
          >
            <SDCImg src={images[1].image} alt={images[1].title} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "solid green",
                position: "relative",
                right: 0,
                backgroundColor: "white",
              }}
            >
              <SDCTech>{images[1].tech}</SDCTech>
            </Box>
            <Box
              sx={{
                border: "solid green",
                position: "absolute",
                bottom: 0,
                left: "0%",
                width: "40%",
                height: "20%",
                backgroundColor: "white",
              }}
            >
              <SDCText>{images[1].description}</SDCText>
            </Box>
          </Box>
        </Grid>
        {/* Vegetation Station */}
        <Grid container item border="solid blue">
          <Box
            sx={{
              display: "flex",
              border: "solid pink",
              position: "relative",
              flexDirection: "row",
            }}
          >
            <VSImg src={images[2].image} alt={images[2].title} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
