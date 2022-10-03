import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { AUTH_TOKEN } from './constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://hbz.herokuapp.com/api/',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;