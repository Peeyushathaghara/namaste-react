# Read me file for git commit
# git init
# git branch -M branchname
# git add .
# git commit -m "type your message here"
# git remote add origin https://github.com/Peeyushathaghara/namaste-react.git
# git push origin main

<!-- important json packages in our package.json file
first command npm init - to create package  -->

<!-- we need a bumdler eg webpack, parcel -->

important npm commands

npm install -D packagename ->  -D flag stands for dependencies. There are 2 types of dependencies -devdependencies used for development purposes whereas as dependencies are used for production purposes.
installing parcel as devdependencies
npm install -D parcel

npx parcel sourcefile
npx parcel build entryfile - for building production file

in package.json mention under the scripts key different commands and then run using...
npm run scriptkeyname

//Order food app
// Headers
//     logo
//     nav-items
// Body
//     search
//     restaurant container
//     - restaurant card
// Footer
//     copyright
//     links
//     address
//     contact

2 types of exports and imports
1. default export and imports
2. named export and imports - used when we have to export multiples things from a single file and while importing we need to import inside curly braces.

React hooks
normal javascript functions
2 most imp hooks in react are
useState() - use to generate powerful state variables
whenever a state variables updates/changes react rerenders its components. 

useEffect()
useEffect(callback function, dependancy array)
this hook gets called just after react renders its components.
It can be used to make external api calls.
The dependancy array changes the behaviour of rendering of useEffect hook
1. When dependancy array is absent = hook will be called on every time when the component is rerendered.
2. when dependancy array is empty - [] = hook will be called on only initial render(just once)
3. when dependancy array is not null = hook is called inly when the dependancy changes

Shimmer UI
dummy UI which gets loaded before our original app is loaded to give a better user experience

how to identify hooks in react industry - all hooks starts with word use - useState, useEffect, useRouteError

react-router-dom