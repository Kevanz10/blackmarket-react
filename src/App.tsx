import React from 'react';
import './App.css';
import { Login } from './components/authentication/Login'
import { Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

export const link = createHttpLink({
  uri: "http://1a69-190-250-208-71.ngrok.io/graphql"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const App = () => { 
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}