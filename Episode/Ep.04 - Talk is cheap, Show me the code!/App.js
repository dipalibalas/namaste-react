import React from 'react';
import ReactDOM  from 'react-dom/client';



const Heading = () =>(
    <h1>Namste Functional Component</h1>
)




const root = ReactDOM.createRoot(document.getElementById("root"));

// render functional component like this
root.render(<Heading />);  
