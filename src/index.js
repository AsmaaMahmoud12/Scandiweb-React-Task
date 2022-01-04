import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./components/redux/store/store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <Router>
    <Provider  store={store}>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </Provider>
  </Router>,
  rootElement
);
