import pug from "pug";
import path from "path";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait,
} from "@testing-library/dom"
import "@testing-library/jest-dom/extend-expect"

const renderPug = data => pug.renderFile(path.join(__dirname, "..", "page.pug"), data);

test("It should render pug correctly", () => {
  expect(renderPug({
    title: "Pug",
    text: "Pug is great"
  })).toMatchSnapshot();
});

test("Heading should be in the DOM", () => {
  const div = document.createElement("div");
  div.innerHTML = renderPug({
    title: "Pug",
    text: "Pug is great"
  });

  getByTestId(div, "page-heading");
});
