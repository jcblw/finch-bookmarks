import { useQuery } from "finch-graphql";
import gql from "graphql-tag";
import React from "react";
import { BookmarkCard } from "./BookmarkCard";
import { BookmarkList } from "./BookmarkList";

const RecentBookmarksDocument = gql`
  query getRecentBookmarks {
    browser {
      bookmarks {
        id
        title
        url
        favicon
      }
    }
  }
`;

export const RecentBookmarks = () => {
  const { data, loading, error } = useQuery(RecentBookmarksDocument);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <React.Fragment>
      <BookmarkList
        title="Recent Bookmarks"
        bookmarks={data.browser.bookmarks}
      />
    </React.Fragment>
  );
};
