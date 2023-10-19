import React from 'react';
import ReactDOM  from 'react-dom/client';

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render) 

const heading = React.createElement("h1",{id: "heading"},"Namste React");
console.log(heading)

const jsxHeading = <h1>Namste React from JSX</h1>
console.log(jsxHeading);



const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(jsxHeading);