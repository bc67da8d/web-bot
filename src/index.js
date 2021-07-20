import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Clock from "./Clock";
// import FormLogin from "./FormLogin";
// import Dashboard from "./component/dashboard.component";
import Application from "./application";
// import Demo from "./Demo";
// import TextOne from "./TextOne";
// import TextTwo from "./TextTwo";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap.min.css";
import { useHistory } from "react-router-dom";

function History () {
	let history = useHistory();
	return history;
}

// function GuestGreeting () {
// 	return (
// 		<h1>Please sign up!</h1>
// 	)
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;

//   if (isLoggedIn) {
//     return <GuestGreeting />;
//   }
//   return <Demo/>;
// }

// ReactDOM.render(
//   <React.StrictMode>
//     {/*<App />*/}
//     <TextOne/>
//     <TextTwo/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById("root"));
ReactDOM.render(<Application useHistory={History}/>, document.getElementById("root"));

// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
