import React from "react";
import { setContext } from '@apollo/client/link/context';
import "./App.css";
import Navbar from "./template/Navbar";
import Landing from "./template/Landing";
import Footer from "./template/Footer";
import Signup from "./template/Signup";
import Login from "./template/Login";
import ToiletForm from "./template/Form";
import Map from './template/Map'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import Home from "./template/Home"

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

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link: authLink.concat(link),
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
          {/* <Route exact path="/logout">
            <Logout />
          </Route> */}
          {/* <Route path="*" component={Home}/> */}
        </Switch>

        <Landing />
        <Map />

        
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
