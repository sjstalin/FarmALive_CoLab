import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../src/pages/Auth/main";
import Registration from "../src/pages/Auth/registration";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;

// import React from "react";
// import "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/App.scss";
// import {
//   Login,
//   Register,
// } from "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/pages/Auth/index.jsx";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogginActive: true,
//     };
//   }

//   componentDidMount() {
//     //Add .right by default
//     this.rightSide.classList.add("right");
//   }

//   changeState() {
//     const { isLogginActive } = this.state;

//     if (isLogginActive) {
//       this.rightSide.classList.remove("right");
//       this.rightSide.classList.add("left");
//     } else {
//       this.rightSide.classList.remove("left");
//       this.rightSide.classList.add("right");
//     }
//     this.setState((prevState) => ({
//       isLogginActive: !prevState.isLogginActive,
//     }));
//   }

//   render() {
//     const { isLogginActive } = this.state;
//     const current = isLogginActive ? "Register" : "Login";
//     const currentActive = isLogginActive ? "login" : "register";
//     return (
//       <div className="App">
//         <div className="login">
//           <div className="container" ref={(ref) => (this.container = ref)}>
//             {isLogginActive && (
//               <Login containerRef={(ref) => (this.current = ref)} />
//             )}
//             {!isLogginActive && (
//               <Register containerRef={(ref) => (this.current = ref)} />
//             )}
//           </div>
//           <RightSide
//             current={current}
//             currentActive={currentActive}
//             containerRef={(ref) => (this.rightSide = ref)}
//             onClick={this.changeState.bind(this)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const RightSide = (props) => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

// export default App;
