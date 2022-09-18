import React, { ReactElement } from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";

// styled components
const NameBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  border-top: solid transparent;
  :hover {
    color: blue;
    border-top: solid pink;
  }
`;

const Header = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  border-top: solid transparent;
  :hover {
    color: blue;
    border-top: solid pink;
  }
`;

const Resume = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  border-top: solid transparent;
  :hover {
    color: blue;
    border-top: solid pink;
  }
`;

const NavbarContainer = styled.div`
  background-color: blue;
  width: 100%;
  height: 5em;
`;
function Navbar(): ReactElement {
  return (
    <NavbarContainer>
      <Container maxWidth="lg" sx={{ height: "100%", backgroundColor: "gray" }}>
        <Grid container width="100%" height="100%">
          <Grid
            container
            item
            border="solid black"
            md={3}
            alignContent="center"
          >
            <NameBox>
              <span>clayton chin</span>
            </NameBox>
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
            <Header>about</Header>
            <Header>projects</Header>
            <Header>contact</Header>
          </Grid>
          <Grid
            container
            item
            border="solid green"
            md={3}
            justifyContent="flex-end"
            alignContent="center"
          >
            <Resume>resume</Resume>
          </Grid>
        </Grid>
      </Container>
    </NavbarContainer>
  );
}

export default Navbar;
