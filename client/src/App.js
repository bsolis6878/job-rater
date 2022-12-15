import { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Review from './components/PostReview';

const httpLink = createHttpLink({
  uri: '/graphql',
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const [currentlySelected, setCurrentlySelected] = useState('Home');

  return (
    <ApolloProvider client={client}>
      <Header
        currentlySelected={currentlySelected}
        setCurrentlySelected={setCurrentlySelected}
      />
      {currentlySelected === 'Home' && <Home setCurrentlySelected={setCurrentlySelected} />}
      {currentlySelected === 'Blogs' && <Blogs />}
      {currentlySelected === 'Profile' && <Profile setCurrentlySelected={setCurrentlySelected} />}
      {currentlySelected === 'Login' && <Login />}
      {currentlySelected === 'Signup' && <Signup />}
      {currentlySelected === 'Review' && <Review />}
    </ApolloProvider>
  );
}

export default App;
