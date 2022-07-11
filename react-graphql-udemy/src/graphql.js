import gql from "graphql-tag";

export const ME = gql`
  query me {
    user(login: "Turu0512") {
      name
    }
  }
`;
