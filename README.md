- Package.json is the configuration file for NPM(node package manager)

- For igniting our app we have to install the packages which will helps to give super power to our app.

- Very first package we need to install is bundler.
Q.) What is bundler?
--> Bundler is the tools which will help to manage the dependencies and some other assests of the react application, and packages in a single file that can be go for production level.
Different different bundlers present, some of them are webpac, parcel, vite etc..

We are going with the parcel bundler.

***************************************************************************************************************************************

Inside package.json, we have different-different devdependices and dependencies present, inside it "^2.8.3" is present which indicate the version of that package.
^ named as caret
~ named as tilde

Both symbol can be used. But mostly we used caret(^).
Reason:- Caret will upgrade if any minor change in version will happen and Tilde will upgrade if any major change in version will happen.
# Minor change in version means: from 2.8.3 to 2.8.4
# Major cahnge in version means: from 2.8.3 to 3.0.0

So in project, minor change in version is acceptable but major change will lead to change the code of project.

# Package-lock.json will maintain the exact version of all the dependencies which we are using in our project
We don't need to push the node_modules files on github because 
1) First is the size of node_modules files is very big 
2) Second is we can regenerate the node_modules again after write the command "npm install", after hit the enter the all node_modules will be regenerated because all the version of packages present in package-lock.json


After installing the react and react-dom pacakge, we don't need the CDN link so we have to remove it.
Important:-
After run "npx parcel index.html" it will help to create local server for us and run the index.html file

# Done by the parcel:-
- Dev build
- Create local server
- HMR - Hot module Replacement (it means it refresh the server when they see any changes in the project)
- It will done by File watching algorithm which is written in C++
- Also it will do the caching stuffs thats why during refreshing the project it will take less time than the previous one
- Image optimization
- Minification the file
- Bundling the file
- Compress the file
- Differential bundling -> It means it manage the project on older version also.
- Error handling
- Tree Shaking -> It means it will remove the unwanted things from the code, which is not required for the development

****************************************************************************************************************************************
# Points:-
- JSX is not understand by the browser
- Browser can understand ES6 (Eccmascript)
- When we write JSX then behind the scene JSX will convert into browser understandable language 
- This is done by the parcel but parcel donot do it by own, it will done by babel. So parcel act like a manager.
- JSX create the react element.
- JSX will sanitize all the code first and then execute it, so worries of any Cross-site scripting

# At the end of the day:-
- JSX is the React.createElement --> it means react element
- React element is the object
- Functional compoment is simple javascript function
- Props are nothing but argument
- Hooks is a javascript function with some superpower

# Types of Exports
1) Default export:- In this type of export, during import we don't need "{}" this bracket.
- Syntax:
export default <component_name>
import <component_name> from <file_path>
2) Named export:- In this type of export, during import we need "{}" this bracket.
- Syntax:
export const <component_name>
import { <component_name> } from <file_path>

# Hooks
- Hooks is nothing but a powerful super function.

Types of Hooks:-
1) useState() -> return a superpower arr. UseState will rerender the whole component after changing with the new value in state variable. It means whenever state variable change, react do the reconcillation cycle(Re-render the component).
2) useEffect -> Render the data after the component render cycle is completed


# Virtual DOM:-
Virtual DOM is nothing but the javascript object. When we creat the react element then at the end of the day it is an object so that object is nothing but the virtual DOM.

# Reconcillation algorithm:-
- Reconciliation is React's way of diffing the virtual DOM tree with the updated virtual DOM to determine the most efficient way to update the real DOM. This process allows React to apply only the necessary changes to the DOM, avoiding the costly operation of updating the entire DOM tree.
- This is also called Diffing algorithm.


# Approach to render the UI
1) Load the website -> Get the data from APIs -> Render the data in the component
2) Load the website -> Render the component -> Get data from APIs -> Fill the already rendered with new coming data

For second approach, we use useEffect() hook.
Because first it render the component and then after finish it, it will again render the data.

useEffect() -> It takes two argument a. callback function b. Dependencies array
useEffect(()=>{},[]);

This callback function will call when the render cycle complete.