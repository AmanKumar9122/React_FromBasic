// core javascript stuff 
import Header from "./Header"
import Login,{Profile} from "./UserComponent"
//import React from 'react'; // without jsx we have to import react  

// if a component is exported using default statement then we directly
// import it. If it is exported with default export then it is imported
// with the help of {}.

// function App(){
//   return(

//     // on removing div it's showing error.
//     // For using multiple h1 tags we need to wrap them inside a div element.

//     <div>
//       <Login />
//       <Profile />
//       <Header />
//       <h1>Hello React</h1>
//       <h1>Code by Aman Kumar</h1>

//     </div>
//   )
// }


// With JSX

// function App(){
//   const username = "Aman Kumar";
//   let x = 20;
//   let y = 30;
//   return(
//     <>
//     <h1>{username}</h1>
//     <h1>{10+20+30}</h1>
//     <h1>{x+y}</h1>
//     <button onClick={()=>alert("hello")}>Click Me</button>
//     </>
//   )
// }

// without jsx
// function App() {
//   const username = "Aman Kumar";
//   let x = 20;
//   let y = 30;

//   return React.createElement(
//     React.Fragment,
//     null,
//     React.createElement("h1", null, username),
//     React.createElement("h1", null, 10 + 20 + 30),
//     React.createElement("h1", null, x + y),
//     React.createElement(
//       "button",
//       { onClick: () => alert("hello") },
//       "Click Me"
//     )
//   );
// }



export default App

// work of react it to write html code in javascript file and render it over browser

// if we write app in small letters and try to export it and use it in main.jsx it will not works.
// As html tags are written in small letters. So react consider functions with capital letter as 
// its component.

// jsx full form is not stated well in official web site as well as 
// other site somewhere it is javascript syntax extension / javascript xml

