import './App.css';
import Navbar from './template/Navbar';
import Landing from './template/Landing';
import Sample from './template/Sample';
import Footer from './template/Footer';
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
    <div className="App">
      <Navbar/>
      <Landing/>
      <Sample/>
      <Footer/>
    </div>
  );
}

export default App;
