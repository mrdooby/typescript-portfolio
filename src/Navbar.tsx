import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";

// styled components
const Name = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
`;

const Resume = styled.div`
  display: flex;
`;
function Navbar() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item border="solid black" md={3}>
          <Name>clayton chin</Name>
        </Grid>
        <Grid
          container
          item
          border="solid blue"
          md={6}
          direction="row"
          justifyContent="space-around"
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
        >
          <Resume>resume</Resume>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Navbar;
