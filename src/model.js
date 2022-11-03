import jsBanner from "./assets/jsBanner.jpeg";
import programmBanner from "./assets/banner.jpg";
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Websites constructor on pure JavaScript!!!", {
    tag: "h2",
    styles: {
      background:
        "linear-gradient(to right, #777726, #979731, #b9b93c, #dbdb47, #ffff53)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(jsBanner, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "600px",
      height: "auto",
      "border-radius": "10px",
    },
    alt: "Image",
  }),
  new ColumnsBlock(
    [
      "Application with pure JavaScript",
      "Here is princips SOLID and OOP in JavaScript",
      "I love JavaScript",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock(
    '<a href="https://github.com/hovakimyanarayik" target="_blank">My GitHub page</a>',
    {
      styles: {
        background:
          "linear-gradient(to right, #dfdfdf, #dee1ea, #d5e4f5, #c7e9fd, #b6efff);",
        color: "white",
        padding: "1rem",
        "font-weight": "bold",
        "text-align": "center"
      },
    }
  ),
  new ImageBlock(programmBanner, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
      "border-radius": "10px",
    },
    alt: "Image",
  }),
];
