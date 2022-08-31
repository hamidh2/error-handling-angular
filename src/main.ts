import * as Sentry from '@sentry/angular';

import { AppModule } from './app/app.module';
import { BrowserTracing } from '@sentry/tracing';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

Sentry.init({
  dsn: 'https://2ebe06e09db2421e8cfee351bbc11226@o1385677.ingest.sentry.io/6705761',
  tracesSampleRate: 1.0,
  environment: environment.name,
  integrations: [
    new BrowserTracing({
      tracingOrigins: [],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
