/*const element = React.createElement(
    "h1",
    { id: "heading" }, // In this object we pass the attributes to it like id,class etc.
    "Hello world from React"
); //Element is created by simple react 

console.log(element); // It will print an object which has props.  So element is not HTML, it is simple object
// Props is the combination of children and attributes.
// Here chlidren is "Hello world from React" of h1 tag.
const root = ReactDOM.createRoot(document.getElementById("root")); // Root is been created by ReactDOM
root.render(element); // Now render the element to the root.
// After rending the element the object will convert into HTML which can be understand by the browsers.

// Above code looks like in HTML as

<h1 id="heading">Hello world from React</h1>

// Here only one child is there. 
// How we can do for nested element
/*
For example if we want to create like:-
<div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
</div>
*/
// Above things done by react in this way:-
/*const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")] // for siblings we have to use array to create
    )
)
// After writing this code it will be very complicated if so many nested and siblings will be present. But we know react makes our code easy. This can be possible with the help of JSX.
// So the rumerous that react cant be written without JSX is wrong. JSX helps to write code in easy way
*/

const element = React.createElement(
    "h1",
    { id: "heading" },
    "Hello world from React"
);

// We can create the above react element with the help of JSX
const elementJSX = <h1 id="heading" >Hello world from Reaxt</h1>
// These two are totally equivalent.
/*
 * Important point
    -> React element is an object and JSX is syntax, We can create react element using JSX.
    -> JSX is not html inside Javascript.
    -> It is Like html inside javascript.
 */

/************** Component **************/
// Functional Component 
// --> It is just a javascript function 
// --> It return a react element or JSX
const navigation = () => {
    return <h1>Functional Component</h1>
}

// For rendering the functional component we use the Syntax
const root = ReactDOM.creatroot(document.getElementById("root"));
root.render(<navigation/>)

// For rendering the react element 
root.render(elementJSX)



