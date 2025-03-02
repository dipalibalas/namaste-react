import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

// React Component
// Class Based Component - OLD
// Functional Component - NEW -> normal javascript function

// const heading = React.createElement("h1",{id: "heading"},"Namste React");
// console.log(heading)

// const jsxHeading = (<h1>Namste React from JSX</h1>)
// console.log(jsxHeading);

const TitleComp = () => <h1 className="head">Namste React - Component</h1>;

const titleEle = <h1 className="head">Namste React - Element</h1>;
const HeadingComponent = () => (
  <div id="container">
    {TitleComp()}
    {titleEle}
    <TitleComp />
    <TitleComp></TitleComp>
    <h1>Namste Functional</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(jsxHeading); // rendet react element like this

// render functional component like this
root.render(<HeadingComponent />);
