import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideNgxNightwind } from '../../../ngx-nightwind/src/lib/ngx-nightwind.provider';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNgxNightwind("light")]
};
