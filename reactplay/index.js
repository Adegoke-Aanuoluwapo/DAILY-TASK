// function Navbar() {
//   return (
//     <nav classname="navbar navbar-expand-lg navbar-light bg-light">
//       <a classname="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         classname="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span classname="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul class="navbar-nav">
//           <li classname="nav-item active">
//             <a classname="nav-link" href="#">
//               Home <span class="sr-only">(current)</span>
//             </a>
//           </li>
//           <li classname="nav-item">
//             <a classname="nav-link" href="#">
//               Features
//             </a>
//           </li>
//           <li classname="nav-item">
//             <a classname="nav-link" href="#">
//               Pricing
//             </a>
//           </li>
//           <li classname="nav-item dropdown">
//             <a
//               classname="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdownMenuLink"
//               role="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown link
//             </a>
//             <div
//               classname="dropdown-menu"
//               aria-labelledby="navbarDropdownMenuLink"
//             >
//               <a classname="dropdown-item" href="#">
//                 Action
//               </a>
//               <a classname="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a classname="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// function MainContent() {
//   return (
//     <div>
//       <h1 classname="header">I am learning React</h1>
//       <p>Lorem, where are you</p>
//     </div>
//   );
// }
// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.querySelector("#root")
// );
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);
// ReactDOM.render(
//   <h1 className>
//     This is JSX
//     <ul>
//       <li>Bimpe</li>
//       <li>Theodora</li>
//     </ul>
//   </h1>,
//   document.getElementById("root")
// );
// const h1 = document.createElement("h1");
// h1.textContent = "Hello world";
// h1.className = "header";
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);

// const page = (
//   <div>
//     <h1>This is JSX</h1>
//     <p>Voila, this is interesting</p>
//   </div>
// );
// console.log(page);
// ReactDOM.render(page, document.getElementById("root"));
const Navbar = (
  <nav>
    <h1>This is my JSX site</h1>
    <ul>
      <li>Contact</li>
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
      <li>Offices</li>
    </ul>
  </nav>
);
ReactDOM.render(Navbar, document.getElementById("root"));
