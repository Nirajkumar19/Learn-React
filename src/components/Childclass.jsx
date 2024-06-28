import  React from "react";

class Childclass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+ "Child Constructor");
        this.state = {
            userInfo:{
                name:"Some dummy name",
                location: "Some dummy location"
            }
        }
    }

    componentDidMount(){
        console.log(this.props.name+"Child Component did mount");
    }
    // Let's make an API call, we are making it in componentDidMount
    async componentDidMount(){
        const data = await fetch("Any URL which on which we want to API call");
        const jason = await data.json();
        this.setState({
            userInfo: jason
        })
    }

    componentDidUpdate(){
        // This method will call after the setState will finish their work.
    }

    componentWillUnmount(){
        // This method is being used for unmount the component.
        // This method called when we are going from one page to another that means change the component.
    }

    render(){
        console.log(this.props.name+"Child render");
        const {name,address} = this.props;
        return(
            <div className="child">
                <h3>Name : {name}</h3>
                <p>Address : {address}</p>
            </div>
        )
    }
}

export default Childclass;

/** Summery
 * 1) Mounting cycle:-
 *      Constructor called 
 *      Render called
 *          During this, HTML contains the dummy data
 *      Now componentDidMount called
 *      In that we made an API call
 *      And along with that we called setState() --> Fill the new data and also it trigger the Updating life cycle
 * 2) Updating cycle:-
 *      Render called with the new data
 *          HTML have the new data
 *      componentDidUpdate called
 */