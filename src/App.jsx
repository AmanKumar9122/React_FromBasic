// core javascript stuff
import Header from "./Header";
import ToDo from "./Todo";
import Login, { Profile } from "./UserComponent";
//import React from 'react'; // without jsx we have to import react

// if a component is exported using default statement then we directly
// import it. If it is exported with default export then it is imported
// with the help of {}.

// function App(){
//   return(

//     // on removing div it's showing error.
//     // For using multiple h1 tags we need to wrap them inside a div element.

//     <div>
//       {/* <Login />
//       <Profile />
//       <Header />
//       <h1>Hello React</h1>
//       <h1>Code by Aman Kumar</h1> */}
//       <ToDo />

//     </div>
//   )
// }

// function App() {
//   const name = "Aman Kumar";
//   let x = 10;
//   let y = 20;
//   return (
//     <div>
//       <h1>JSX with Curly Braces</h1>
//       <h2>{name}</h2>
//       <h1>{x + y}</h1>
//     </div>
//   );
// }

// Conditional Rendering in JSX
// You can also use conditions inside JSX using the ternary operator:

// function App() {
//   const name = "Aman Kumar";

//   return (
//     <div>

//       <h2>{name ? name : "User not Found"}</h2>

//     </div>
//   );
// }

// Using Functions Inside JSX
// You can call functions directly within JSX:

// function App() {
//   function fruit() {
//     return "Apple";
//   }
//   return <h1>{fruit()}</h1>;
// }

// Performing Operations in JSX
// You can write logic-based operations and call them inside your JSX:

// function App() {
//   function operation(a, b, op) {
//     if (op == "+") {
//       return a + b;
//     } else if (op == "-") {
//       return a - b;
//     } else {
//       return a * b;
//     }
//   }
//   return (
//     <div>
//       <h1>{operation(20, 10, "-")}</h1>
//       <h1>{operation(20, 10, "+")}</h1>
//       <h1>{operation(20, 10, "")}</h1>
//     </div>
//   );
// }

// Using Objects and Arrays with JSX
// Working with objects:

// function App() {
//   const userObj = {
//     name: "Aman Kumar",
//     email: "aman@test.com",
//     age: 29,
//   };

//   return (
//     <div>
//       <h1>{userObj.name}</h1>
//       <h1>{userObj.email}</h1>
//       <h1>{userObj.age}</h1>
//     </div>
//   );
// }

// Working with arrays:

// function App() {
//   const userArray = ["sam", "peter", "bruce"];

//   return (
//     <div>
//       <h1>{userArray[0]}</h1>
//     </div>
//   );
// }

// Using HTML Tag Attributes with JSX
// JSX also allows you to use dynamic values inside tag properties such as value, id, or src.

function App() {
  const name = "peter";
  let path =
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/10/1/HBFB1406_180126_dog-on-rug_041.jpg.rend.hgtvcom.616.822.suffix/1523383802334.jpeg";

  return (
    <div>
      <input type="text" value={name} id={name} />
      <br />
      <img src={path} />
    </div>
  );
}

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

export default App;

// work of react it to write html code in javascript file and render it over browser

// if we write app in small letters and try to export it and use it in main.jsx it will not works.
// As html tags are written in small letters. So react consider functions with capital letter as
// its component.

// jsx full form is not stated well in official web site as well as
// other site somewhere it is javascript syntax extension / javascript xml
