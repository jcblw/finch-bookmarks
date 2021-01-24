const { FinchApi, FinchMessageKey } = require("finch-graphql");
import { schema } from "./background/shema";
import { resolvers } from "./background/resolvers";

const graphqlApi = new FinchApi({
  resolvers,
  typeDefs: schema,
  onQueryResponse: ({ operationName, timeTaken, response }) => {
    const hasErrors = response.errors && response.errors.length;
    console.log(
      `${(hasErrors ? "[ERROR]" : "[OK]").padEnd(7)}${operationName.padEnd(
        10
      )} [${timeTaken}ms]`
    );
    if (hasErrors) {
      console.log(response.errors);
    }
  },
});

// TODO: Finch binds to chromes messages which fail to respond
// https://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type == FinchMessageKey.Generic) {
    return graphqlApi.onMessage(message, sender);
  }
  return true;
});

browser.runtime.onInstalled.addListener((details) => {
  console.log("previousVersion", details.previousVersion);
});

browser.browserAction.setBadgeText({
  text: `'Allo`,
});

console.log(`'Allo 'Allo! Event Page for Browser Action`);
