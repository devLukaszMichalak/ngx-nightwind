import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { NgxNightwind } from './ngx-nightwind.service';
import { NGX_NIGHTWIND_DARK, NGX_NIGHTWIND_LIGHT } from './ngx-nightwind-state';

/*
 * Provide the NgxNightwind in your application config:
```ts
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgxNightwind(),
    ...
  ]
};
```
 */
export const provideNgxNightwind = (): EnvironmentProviders =>
  makeEnvironmentProviders([{provide: NgxNightwind, useFactory: ngxNightwindFactory()}]);

function ngxNightwindFactory(): () => NgxNightwind {
  
  const getInitialColorMode = (): string => {
    const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? NGX_NIGHTWIND_DARK : NGX_NIGHTWIND_LIGHT;
    }
    
    return NGX_NIGHTWIND_LIGHT;
  };
  
  getInitialColorMode() == NGX_NIGHTWIND_LIGHT ? document.documentElement.classList.remove(NGX_NIGHTWIND_DARK) : document.documentElement.classList.add(NGX_NIGHTWIND_DARK);
  
  return () => new NgxNightwind();
}
