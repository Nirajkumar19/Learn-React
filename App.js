import React from "react";
import ReactDOM  from "react-dom/client";
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
/*
const element = React.createElement(
    "h1",
    { id: "heading" },
    "Hello world from React"
);
*/
// We can create the above react element with the help of JSX
/*const elementJSX = <h1 id="heading" >Hello world from React</h1>
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
// --> First letter should be capital for writting the functional component like here "N" should be capital in Navigation
/*
const Navigation = () => {
    return <h1>Functional Component</h1>
}
*/
// For rendering the functional component we use the Syntax
/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navigation/>)*/
// At the end of the day functional component is also a simple javascript function so we can also call as simple function like "Navigation()"
// root.render(Navigation())

/**
 * For functional component
 * <Navigation></Navigation>
 * <Navigation/>
 * Navigation()
 * 
 * These above three are same at the end of the day
 * We can call functional component in any of the way among three
 */

// For rendering the react element 
// root.render(elementJSX)

/**
  Food ordering App
 * Header
  - Logo
  - Nav-itmes
    . Home
    . About us
    . Cart
 * Body
  - Search box
  - Food itmes
    . Image of food
    . Name of food
    . Rating of food
    . Time of delivery
 * Footer
  - Copyright
  - Links
    . Contacts
 */


const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                {/* <img src="https://b.zmtcdn.com/data/pictures/3/20211563/a31c86a45e40c46ba4f619773cc32b4c.jpg?fit=around|300:273&crop=300:273;*,*"></img> */}
                <p className="logo">Logo</p>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}

const RestoComponent = () => {
    return (
        <div className="detail-container">
            <img className="food-image" src="https://b.zmtcdn.com/data/pictures/3/20211563/a31c86a45e40c46ba4f619773cc32b4c.jpg?fit=around|300:273&crop=300:273;*,*"></img>
            <div className="itme-name">
                <h3>Tara Maa</h3>
            </div>
            <div className="rating">
                <p>4.5</p>
            </div>
            <div className="time">
                <p>40mins</p>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <p>Search</p>
            </div>
            <div className="resto-container">
                <RestoComponent />
            </div>
        </div>
    )
}
const Applayout = () =>{
    return (
        <div className="applayout">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)






