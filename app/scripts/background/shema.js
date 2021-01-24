import gql from "graphql-tag";

export const schema = gql`
  type Bookmark {
    id: String!
    url: String!
    title: String!
    dateAdded: String!
    favicon: String
  }

  type Browser {
    bookmarks(amount: Int, search: String): [Bookmark!]!
  }

  type Query {
    browser: Browser!
  }
`;
