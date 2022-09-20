import React from "react";
import { Container, Grid, Box } from "@mui/material";
import styled from "styled-components";
import images from "./assets/projectsAssets";

// styled components
const FECImg = styled.img`
  display: flex;
  object-fit: contain;
  width: 80%;
  box-shadow: 0 0 3px black;
`;

const FECText = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0 0 3px black;
  width: 80%;
  background-color: white;
  padding: 5px;
`;

const FECTech = styled.div`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const SDCImg = styled.img`
  display: flex;
  object-fit: contain;
  width: 80%;
  float: right;
  box-shadow: 0 0 3px black;
`;

const SDCText = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0 0 3px black;
  width: 80%;
  background-color: white;
  padding: 5px;
`;

const SDCTech = styled.div`
  position: relative;
  bottom: 0;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const VSImg = styled.img`
  object-fit: contain;
  height: 80vh;
  box-shadow: 0 0 3px black;
`;

const VSText = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0 0 3px black;
  width: 80%;
  background-color: white;
  padding: 5px;
`;

const VSTech = styled.div`
  display: flex;
  position: relative;
  padding: 5px;
  width: calc(70% - 10px);
  justify-content: flex-start;
`;

function Projects() {
  return (
    <Container maxWidth="lg">
      <Grid container width="100%" spacing={4} marginTop="2vw">
        <Grid container item>
          <Box
            sx={{
              // border: "solid pink",
              position: "relative",
              flexDirection: "row",
              right: 0,
            }}
          >
            <FECImg src={images[0].image} alt={images[0].title} />
            <Box
              sx={{
                // border: "solid green",
                position: "relative",
                bottom: 0,
                width: "40%",
                height: "auto",
              }}
            >
              <FECTech>{images[0].tech}</FECTech>
            </Box>
            <Box
              sx={{
                display: "flex",
                // border: "solid black",
                position: "absolute",
                width: "40%",
                right: "0",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-end",
                bottom: "0",
              }}
            >
              <FECText>{images[0].description}</FECText>
            </Box>
          </Box>
        </Grid>
        {/* SDC */}
        <Grid container item marginTop="2vw">
          <Box
            sx={{
              display: "flex",
              // border: "solid pink",
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
                // border: "solid green",
                position: "relative",
                right: 0,
              }}
            >
              <SDCTech>{images[1].tech}</SDCTech>
            </Box>
            <Box
              sx={{
                display: "flex",
                // border: "solid black",
                position: "absolute",
                width: "40%",
                left: "0",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-end",
                bottom: "0",
              }}
            >
              <SDCText>{images[1].description}</SDCText>
            </Box>
          </Box>
        </Grid>
        {/* Vegetation Station */}
        <Grid container item marginTop="2vw">
          <Box
            sx={{
              display: "flex",
              // border: "solid pink",
              position: "relative",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // border: "solid pink",
                position: "relative",
                flexDirection: "row",
                width: "50%",
                justifyContent: "flex-end",
              }}
            >
              <VSImg src={images[2].image} alt={images[2].title} />
            </Box>
            <Box
              sx={{
                display: "flex",
                // border: "solid black",
                position: "absolute",
                width: "50%",
                left: "35%",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-end",
                top: "10%",
              }}
            >
              <VSText>{images[2].description}</VSText>
              <VSTech>{images[2].tech}</VSTech>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
