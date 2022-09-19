import React, { Suspense, useState } from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";

// styled components
const DrawerContainer = styled.div`
  position: absolute;
  background-color: blue;
  width: 100%;
  height: 8em;
  z-index: 5;
`;

const DescriptionBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  border-top: solid transparent;
  :hover {
    color: blue;
    border-top: solid pink;
  }
`;

const Links = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  border-top: solid transparent;
  :hover {
    color: blue;
    border-top: solid pink;
  }
`;

interface DrawerProps {
  view: string;
  setView: Function;
}

function Drawer({ view, setView }: DrawerProps) {
  function renderView() {
    switch (view) {
      case "about":
        return (
          <DrawerContainer>
            <Container
              maxWidth="lg"
              sx={{ height: "100%", backgroundColor: "gray" }}
            >
              <Grid container width="100%" height="100%">
                <Grid
                  container
                  item
                  border="solid black"
                  md={3}
                  alignContent="center"
                >
                  <DescriptionBox>
                    <span>Get to know me</span>
                  </DescriptionBox>
                </Grid>
                <Grid
                  container
                  item
                  border="solid blue"
                  md={6}
                  direction="row"
                  justifyContent="space-around"
                  alignContent="center"
                >
                  <Links>Timeline↗</Links>
                </Grid>
              </Grid>
            </Container>
          </DrawerContainer>
        );
      case "projects":
        return (
          <DrawerContainer>
            <Container
              maxWidth="lg"
              sx={{ height: "100%", backgroundColor: "gray" }}
            >
              <Grid container width="100%" height="100%">
                <Grid
                  container
                  item
                  border="solid black"
                  md={3}
                  alignContent="center"
                >
                  <DescriptionBox>
                    <span>Some of my projects</span>
                  </DescriptionBox>
                </Grid>
                <Grid
                  container
                  item
                  border="solid blue"
                  md={6}
                  direction="row"
                  justifyContent="space-around"
                  alignContent="center"
                >
                  <Links>Atelier↗</Links>
                  <Links>Soulful↗</Links>
                  <Links>Vegetation Station↗</Links>
                </Grid>
              </Grid>
            </Container>
          </DrawerContainer>
        );
      case "contact":
        return (
          <DrawerContainer>
            <Container
              maxWidth="lg"
              sx={{ height: "100%", backgroundColor: "gray" }}
            >
              <Grid container width="100%" height="100%">
                <Grid
                  container
                  item
                  border="solid black"
                  md={3}
                  alignContent="center"
                >
                  <DescriptionBox>
                    <span>Contact me</span>
                  </DescriptionBox>
                </Grid>
                <Grid
                  container
                  item
                  border="solid blue"
                  md={6}
                  direction="row"
                  justifyContent="space-around"
                  alignContent="center"
                >
                  <Links>LinkedIn↗</Links>
                  <Links>GitHub↗</Links>
                  <Links>Email↗</Links>
                </Grid>
              </Grid>
            </Container>
          </DrawerContainer>
        );
      default:
        return null;
    }
  }
  return <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>;
}

export default Drawer;
