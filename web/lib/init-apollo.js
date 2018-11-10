import ApolloClient, { InMemoryCache } from "apollo-boost";
import { persistCache } from "apollo-cache-persist";
import fetch from "isomorphic-unfetch";

let apolloClient = null;

const URI = "https://eu1.prisma.sh/kim-fransman-4c718b/tisdagsgolfen/dev";

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(/*initialState*/) {
  const cache = new InMemoryCache();

  process.browser &&
    persistCache({
      cache,
      storage: window.localStorage
    });

  return new ApolloClient({
    cache,
    uri: URI,
    clientState: {
      defaults: {
        courseId: null,
        teamEvent: false,
        strokesEvent: false
      }
    }
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
