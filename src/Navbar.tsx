import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import Drawer from "./Drawer";

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
  box-shadow: 0 0 3px black;
  position: fixed;
  z-index: 100;
`;

// interface IDrawerVariables {
//   view: string;
//   drawerState: boolean;
// }

function Navbar(): ReactElement {
  const [view, setView] = useState("");

  return (
    <NavbarContainer
      onMouseLeave={() => {
        setView("");
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%", backgroundColor: "gray" }}>
        <Grid container width="100%" height="100%">
          <Grid container item md={3} alignContent="center">
            <NameBox>
              <span>clayton chin</span>
            </NameBox>
          </Grid>
          <Grid
            container
            item
            md={6}
            direction="row"
            justifyContent="space-around"
            alignContent="center"
          >
            <Header
              onMouseEnter={() => {
                setView("about");
              }}
            >
              about
            </Header>
            <Header
              onMouseEnter={() => {
                setView("projects");
              }}
            >
              projects
            </Header>
            <Header
              onMouseEnter={() => {
                setView("contact");
              }}
            >
              contact
            </Header>
          </Grid>
          <Grid
            container
            item
            md={3}
            justifyContent="flex-end"
            alignContent="center"
          >
            <Resume>resume</Resume>
          </Grid>
        </Grid>
      </Container>
      <Drawer view={view} />
    </NavbarContainer>
  );
}

export default Navbar;
