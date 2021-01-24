/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { BookmarkCard } from "./BookmarkCard";

export const BookmarkList = ({ bookmarks, title }) => (
  <div
    css={css({
      display: "flex",
      flexDirection: "column",
      padding: "16px",
    })}
  >
    <h2>{title}</h2>
    {bookmarks.map(({ title, url, id, favicon }) => {
      return (
        <div
          key={id}
          css={css({
            paddingBottom: "16px",
          })}
        >
          <BookmarkCard id={id} url={url} favicon={favicon} title={title} />
        </div>
      );
    })}
  </div>
);
