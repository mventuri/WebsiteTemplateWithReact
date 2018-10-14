import React, { Component } from "react";
	import logo from "./logo.svg";
	import "./App.css";
  import AppDescription from "./components/AddDescription.js";
  import AppDescription2 from "./components/AddDescription2.js";
  import { BrowserRouter, Route } from "react-router-dom";
  import NavBar from "./components/NavBar";
	import HomeView from "./components/HomeView.js";
  import AboutView from "./components/AboutView.js";
  import ServicesView from "./components/ServicesView.js";
  import ContactsView from "./components/ContactsView.js";
	class App extends Component {
	  render() {
		return (
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to Our Company!</h1>
			</header>
			<BrowserRouter>
			  <div>
          <NavBar/>
				<Route exact path="/" component={HomeView}/>
				<Route exact path="/about" component={AboutView}/>
        <Route exact path="/services" component={ServicesView}/>
        <Route exact path="/contacts" component={ContactsView}/>
			  </div>
			</BrowserRouter>
      <footer>
        <AppDescription text="Company Name" />
        <br/>
        <AppDescription2 text="Company Address and Info" />
      </footer>
      </div>
		);
	  }
	}
	export default App;