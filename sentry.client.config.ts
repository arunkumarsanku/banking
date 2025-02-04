// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c099d637554adc4930079fa10523b8fb@o4508762672594944.ingest.de.sentry.io/4508762860027984",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
