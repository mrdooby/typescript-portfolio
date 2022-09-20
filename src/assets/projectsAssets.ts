import FEC from "./images/fec.jpeg";
import SDC from "./images/sdc.jpeg";
import VS from "./images/vs.jpeg";

const images = [
  {
    title: "Project Atelier",
    image: FEC,
    description:
      "Delivered a fully functional web application that met the specifications and requirements outlined by the project stakeholders",
    repo: "https://github.com/TeamSnuggie/FEC",
    tech: "React, Styled Components, Express, Heroku",
  },
  {
    title: "Soulful Backend",
    image: SDC,
    description:
      "Replaced legacy server/ API for an E-commerce web application with a MVC design pattern and PostgreSQL database",
    repo: "https://github.com/mrdooby/muppets",
    tech: "Express, PostgreSQL, AWS, NGINX",
  },
  {
    title: "Vegetation Station",
    image: VS,
    description:
      "Launched a mobile iOS application that allows users to trade plants with other plant lovers within a 150-mile radius",
    repo: "https://github.com/Blue-Ocean-DBZ/vegetationstation",
    tech: "React Native, PostgreSQL, Express, Expo",
  },
];

export default images;
