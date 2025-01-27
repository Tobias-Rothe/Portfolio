import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { ImprintComponent } from './app/imprint/imprint.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
