import React from "react";

import "./App.css";
import Navbar from "./template/Navbar";
import Landing from "./template/Landing";
import Sample from "./template/Sample";
import Footer from "./template/Footer";
import Signup from "./template/Signup";
import Login from "./template/Login";
import ToiletForm from "./template/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { onError } from 'apollo-link-error';
import { ApolloLink }  from 'apollo-link';


// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError)
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

// const Home = () => {
//   <div className="App">
//     <Navbar />
//     <Landing />
//     <Sample />
//     <Footer />
//   </div>;
// };

function App() {


  return (
    <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <Landing />
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/add">
          <ToiletForm />
        </Route>
      </Switch>
      <Sample />
      <Footer />
    </Router>
    </ApolloProvider>
  );
}

export default App;
