import React from "react";
import Childclass from "./Childclass";

class ParentClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent class constructor");
    }

    componentDidMount(){
        console.log("Parent class component did mount");
    }
    render(){
        console.log("Parent class render");
        return(
            <div className="parent">
                <h1>Parent Class</h1>
                {/* <Childclass name = {"Niraj Kumar"} address = {"Pawa,Nalanda,Bihar"}/> */}
                <Childclass name = {"First"} address = {"Pawa,Nalanda,Bihar"}/>
                <Childclass name = {"Second"} address = {"Pawa,Nalanda,Bihar"}/>
            </div>
        )
    }
}

export default ParentClass;

/*-> In a simple way, first constructor of parent class is called then render method of parent class is called and after way in the similar fashion, constructor of child class is called and then render method is called.
--> It is very simple explanation.
But,
react also give one method that is componentdidmount(), which will called when render method will mount/called.
- So Now the order is "constructor -> render -> componentdidmount"

- Because of this property we make api call inside the componentDidMount() method.

- Now this componentDidMount() method in both parent as well as child component.
Now the order is :- 
        Parent class constructor
        Parent class render
        Child Constructor
        Child render
        Child Component did mount
        Parent class component did mount

You can clearly see the order of parent and child.*/

/**
 * What will happen if we render two child.
 * Important Notes:- 
 * The order when we pass two child--
        Parent class constructor
        Parent class render
        FirstChild Constructor
        FirstChild render
        SecondChild Constructor
        SecondChild render
        FirstChild Component did mount
        SecondChild Component did mount
        Parent class component did mount

    If we want to write the order manually with our logic then it will be like
        Parent class constructor
        Parent class render
        FirstChild Constructor
        FirstChild render
        FirstChild Component did mount
        SecondChild Constructor
        SecondChild render
        SecondChild Component did mount
        Parent class component did mount
    
    But all the component did mount phase will print in the last.

    That's the beauty of react.
    Because it optimise it, we are getting the different order from what were we expected.
    
    Now the question is, How?

    First refer to the react life cycle diagram.
    There you can see that, this cycle is happen in two phase, 1) Render phase --> It contain the constructor and render method 2) Commit Phase --> It contains the Updating the DOM and componentDidMount() method.

    Since DOM Manipulation is so costly, so all the commit phase happen in batches.
    So they batches up all the componentDidMount() methods of all the children and do the commit at very last at the same time.
    That's Why we see in the order that all the componentDidMount of all the children in very last.

 */