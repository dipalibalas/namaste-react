Notes of Episode 03 - Layinng the Fondation

- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind the scenes of JSX
- Babel & Parcel role in JSX
- Component
- Functional Components
    -> Composing Components
    -> we can use componets inside another component or reactelement, Reactelement inside another component or reactelement.
    
    Ex.Composing Component 
    const Title = () => (<h1>Namste React from JSX</h1>)

    const Heading = () =>(
        <div>
        <Title/>
        <h1>Namste Functional Component</h1></div>
    )

- cross-side attack    -> tack care by JSX using escaped
 ->React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.


Assignments
- What is JSX?
 JSX is a syntax like HTML.
 JSX is not a part of React or not a react.
 JSX and React.createElement both are different.

- Superpowers of JSX

- Role of type attribute in script tag? What options can I use there?

- {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX. -> all are same in react


References

Babel: https://babeljs.io/

Attribute Type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type

JS Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Babel Playground: https://babeljs.io/repl#

React without JSX: https://reactjs.org/docs/react-without-jsx.html



