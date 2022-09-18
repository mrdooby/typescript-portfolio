import React from "react";
import styled from "styled-components";
import { ImageList, ImageListItem } from "@mui/material";
import images from "./assets/index";

// styled components
const HomeContainer = styled.div`
  display: flex;
  height: calc(100vh - 5em);
  width: 100%;
  background-color: yellow;
  flex-direction: column;
`;

function srcset(image: any, size: any, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Home() {
  return (
    <HomeContainer>
      <ImageList
        sx={{ width: "100%", height: "100%", overflow: "hidden" }}
        variant="quilted"
        cols={4}
        rowHeight={300}
        gap={0}
      >
        {images.map((item: any) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div>hello nice to meet you</div>
    </HomeContainer>
  );
}

export default Home;
