import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { throttledFetch } from 'lib/throttle';

const MAX_RETRIES = 5;

// Throttled fetch that retries on 429 (Hygraph rate limit) with exponential
// backoff, honoring the Retry-After header when present.
const fetchWithRetry: typeof fetch = async (url, options) => {
  for (let attempt = 0; ; attempt++) {
    let res: Response;
    try {
      res = await throttledFetch(fetch, url, options);
    } catch (err) {
      // Dropped connection (e.g. ECONNRESET): retry with backoff, then give up.
      if (attempt >= MAX_RETRIES) throw err;
      await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt + Math.random() * 250));
      continue;
    }
    if (res.status !== 429 || attempt >= MAX_RETRIES) return res;
    const retryAfter = Number(res.headers.get('retry-after'));
    const delayMs = retryAfter > 0 ? retryAfter * 1000 : Math.min(1000 * 2 ** attempt, 15000);
    await new Promise((resolve) => setTimeout(resolve, delayMs + Math.random() * 250));
  }
};

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.ENDPOINT,
    fetch: fetchWithRetry,
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
