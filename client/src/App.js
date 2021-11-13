import React from "react";

import "./App.css";
import AppNavbar from "./components/Navbar";
import Landing from "./components/Landing";
import Sample from "./components/Sample";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <AppNavbar />
      <Landing />
      <Switch>
        <Route exact path="/signup" component={SignupForm}>
        </Route>
        <Route exact path="/login"component={LoginForm}> 
        </Route>
      </Switch>
      <Sample />
      <Footer />
    </Router>
    </ApolloProvider>
  );

}

export default App;
