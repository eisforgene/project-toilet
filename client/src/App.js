import React from "react";

import "./App.css";
import Navbar from "./template/Navbar";
import Landing from "./template/Landing";
import Sample from "./template/Sample";
import Footer from "./template/Footer";
import Form from "./template/Login";
import Login from "./template/Form";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:3001/graphql',
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route path='/signup' component={Login}/>
      <Route path='/signup' component={Form}/>
      <Landing />
      <Sample />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
