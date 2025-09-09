// core javascript stuff 
import Header from "./Header"
import Login,{Profile} from "./UserComponent"

// if a component is exported using default statement then we directly
// import it. If it is exported with default export then it is imported
// with the help of {}.

function App(){
  return(

    // on removing div it's showing error.
    // For using multiple h1 tags we need to wrap them inside a div element.

    <div>
      <Login />
      <Profile />
      <Header />
      <h1>Hello React</h1>
      <h1>Code by Aman Kumar</h1>

    </div>
  )
}

export default App

// work of react it to write html code in javascript file and render it over browser

// if we write app in small letters and try to export it and use it in main.jsx it will not works.
// As html tags are written in small letters. So react consider functions with capital letter as 
// its component.


