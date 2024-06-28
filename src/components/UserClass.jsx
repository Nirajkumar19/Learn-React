import React, { Component } from "react";

class UserClass extends React.Component{
    constructor(props){ // For getting props we have to use constructor.
        super(props);
        // How to use the state variable
        // this.state is a large object which can hold as many state variable as you want
        this.state = {
            count1 : 0, // count1 is state variable and 0 is its inital value
            count2 : 1
        }
    }
    render(){
        return(
            <div className="user-card">
                {/**Use the state variable */}
                <h1>Count1 = {this.state.count1}</h1>
                <h3>Count2 = {this.state.count2}</h3>
                {/**Now how to update the state variable it means count variable */}
                {/** Important point :--> Don't update the state variable by directly using count = count+1 there is one method name "setState()"  */}
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1+1,
                        count2: this.state.count2+1
                    })
                }}>Increase count</button>
                {/**For using the props we have to use the this keyword */}
                <h1>{this.props.name}</h1> 
                <p>Pawa,Nalanda,Deepnagar,Bihar</p>
                <p>Pincode:- 803115</p>
            </div>
        )
    }
}

export default UserClass;

// Class baesd Component is nothing but a simple javascript class which extend from the React.Component.
// It has a render() method which will return the element as limke in function based compoent function itself return the element.
/**
 * Basic template for class based component.
 
class UserClass extends React.Component{
    render(){
        return(
            <div className="user-card">
                <h1>Niraj Kumar</h1>
                <p>Pawa,Nalanda,Deepnagar,Bihar</p>
                <p>Pincode:- 803115</p>
            </div>
        )
    }
}
 */

// In class based component we have constructor to get the props.
// Important points about the constructor while getting the Props.
/**
 * We must pass that props to parent class with the help of super(props) keyword
 * Getting onwards, for using the props we have to always use this.props.________  
 */