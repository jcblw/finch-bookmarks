/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const BookmarkCard = ({ favicon, title, url, id }) => {
  const isGoodFavicon = !favicon.includes("chrome://");
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        boxShadow: "0px 2px 8px rgba(0,0,0,.3)",
        borderRadius: "8px",
      })}
    >
      <div
        css={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        })}
      >
        <div
          css={css({
            minWidth: "48px",
            minHeight: "48px",
            maxHeight: "48px",
            overflow: "hidden",
            background: "#e2e2e2",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          })}
        >
          <img
            src={favicon}
            alt={title}
            css={css({
              width: "48px",
              height: "48px",
              filter: isGoodFavicon ? "" : "blur(4px)",
            })}
          />
        </div>
        <div
          css={css({
            padding: "8px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          })}
        >
          <h4
            css={css({
              margin: "0",
              flexDirection: "row",
              alignItems: "flex-start",
            })}
          >
            {title}
          </h4>

          <small
            css={css({
              textOverflow: "ellipsis",
            })}
          >
            {url}
          </small>
        </div>
      </div>
    </div>
  );
};
