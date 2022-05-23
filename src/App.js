import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../src/pages/Auth/main";

import Home from "../src/pages/Auth/main";
import Landing from "./pages/landing/landing";

import Registration from "../src/pages/Auth/registration";
import Profile from "../src/pages/farmer/Profile";
import Register from "../src/pages/register";
import Logout from "../src/pages/Auth/registration";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/Landing" element={<Landing />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Home" element={<Home />} />

        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Logout" element={<Logout />} />
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
