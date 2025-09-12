// import React, { useState } from "react";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Update Counter</button>
//     </div>
//   );
// };

// export default Counter;


import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [rCounter, setRCounter] = useState(10);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>R Counter: {rCounter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Update Counter</button>
      <button onClick={() => setRCounter(rCounter - 1)}>Update R Counter</button>
    </div>
  );
};

export default Counter;


// useState lets you manage dynamic values in your UI.
// React re-renders the component every time you call the update function.
// You can use multiple state values in a single component.
// State makes your React components interactive and responsive.
