import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import client from "./client";
import { SEARCH_REPOSITORIES } from "./graphql";

const VALIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = VALIABLES;
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={ME}>
          {({ loading, error, data }) => {
            if (loading) return "loading...";
            if (error) return `error ${error.message}`;

            return <div>{data.user.name}</div>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}
export default App;
