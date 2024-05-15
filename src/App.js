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


import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


/*
const Applayout = () =>{
    return (
        <div className="applayout">
            <Header />
            <Body />
        </div>
    )
}
*/


//Routing in React
// For getting the routing configuration we have to install react-router-dom
// After that we have to import the createBrowserRouter
import { createBrowserRouter,Outlet,RouterProvider  } from "react-router-dom";
// This createBrowserRouter Takes the list of object of path
/*const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/Contact",
        element: <Contact />
    }
])*/

// Now we have to render the appRouter, so for that react-router-dom provide "RouterProvider". So we have to import it.
// It help in rendering the appRouter.
/*const root = ReactDOM.createRoot(document.getElementById("root"));
// Way to render the RouterProvider.
root.render(<RouterProvider router = {appRouter} />);
// root.render(<Applayout />) 

/**
 * const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/Contact",
        element: <Contact />
    }
])
 * 
 * But doing the above appRouter, We lost our header element. But we want the header element as it is then for that we have to create the children for the Applayout component. 
 */

/*
const Applayout = () =>{
    return (
        <div className="applayout">
            <Header />
            <Body />
        </div>
    )
}
*/
// Now we have to remove the <Body/> from Applayout and instead of that we are giving <Outlet /> component which will help to render the children component of Applayout

const Applayout = () =>{
    return (
        <div className="applayout">
            <Header />
            <Outlet /> {/**Here this outlet will replaced according to the children path
             * Like :- Outlet will replace by About Component by giving the router localhost:1234/About
             * Like :- Outlet will replace by Contact Component by giving the router localhost:1234/Contact
             */}
        </div>
    )
}

// Thats why we call it as single page application because it won't load the full the page it only replace the component on their requirement.

// For keeping our header component in all pages
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/RestaurantMenu/:id",
                element: <RestaurantMenu />
                // We use "/:id" because usually we see that all the restaurant have diff diff id's so while displaying the menu of different different restaurant we route with the help of id
                // For example: If Biryani Mahal has id 121 and Amit fast food has id as 131 then for displaying the menu of Biryani mahal we route the page as RestaurantMenu/121, similarly for Amit fast food as RestaurantMenu/131
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// Way to render the RouterProvider.
root.render(<RouterProvider router = {appRouter} />);








