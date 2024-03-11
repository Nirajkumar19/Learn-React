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