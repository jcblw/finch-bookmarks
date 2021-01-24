import { getFaviconByUrl } from "./services";

const browserResolvers = {
  Bookmark: {
    // NOTE: url comes from the root bookmark object
    favicon: ({ url }) => {
      return getFaviconByUrl(url);
    },
  },
  Browser: {
    bookmarks: async (_browser, { amount = 10 }) => {
      const bookmarks = await browser.bookmarks.getRecent(amount);
      return bookmarks;
    },
  },
  Query: {
    browser: () => ({}),
  },
};

export const resolvers = browserResolvers;
