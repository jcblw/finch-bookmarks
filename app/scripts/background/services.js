export const getFavIconFromTab = async (url) => {
  const tab = (await browser.tabs.query({ url }))[0];
  let favicon = null;

  if (
    tab &&
    tab.favIconUrl &&
    tab.favIconUrl != "" &&
    tab.favIconUrl.indexOf("chrome://favicon/") == -1
  ) {
    // favicon appears to be a normal url
    favicon = tab.favIconUrl;
  }

  return favicon;
};

export const getFaviconByUrl = async (rawUrl) => {
  // get favicon from storage
  const url = rawUrl ? rawUrl.replace(/#.*$/, "") : "";
  const tabFavicon = await getFavIconFromTab(url);
  const favicon = tabFavicon || "chrome://favicon/" + url;
  // save icon to storage
  return favicon;
};
