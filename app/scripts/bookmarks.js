import React from "react";
import ReactDOM from "react-dom";
import { RecentBookmarks } from "./bookmarks/components/RecentBookmarks";

const BookmarksApp = () => {
  return <RecentBookmarks />;
};

ReactDOM.render(<BookmarksApp />, document.getElementById("root"));
