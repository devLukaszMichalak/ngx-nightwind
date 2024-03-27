import { APP_INITIALIZER, Provider } from '@angular/core';
import { NgxNightwind } from './ngx-nightwind.service';
import { NGX_NIGHTWIND_DARK, NGX_NIGHTWIND_LIGHT } from './ngx-nightwind-state';

/*
 * Provide the NgxNightwind in your application config:
```ts
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgxNightwind(),
    // or use provideNgxNightwind('dark')
    // to override the default light mode
    // when no preferred theme is set
    // or no previous record in localstore is present
    ...
  ]
};
```
 */
export const provideNgxNightwind = (defaultMode: typeof NGX_NIGHTWIND_LIGHT | typeof NGX_NIGHTWIND_DARK = NGX_NIGHTWIND_LIGHT): Provider[] => [
  {provide: NgxNightwind, useFactory: () => new NgxNightwind()},
  {provide: APP_INITIALIZER, useFactory: () => () => initializeNgxNightwind(defaultMode), multi: true}
];


const initializeNgxNightwind = (defaultMode: typeof NGX_NIGHTWIND_LIGHT | typeof NGX_NIGHTWIND_DARK) => {
  
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
    
    return defaultMode === NGX_NIGHTWIND_LIGHT ? NGX_NIGHTWIND_LIGHT : NGX_NIGHTWIND_DARK;
  };
  
  getInitialColorMode() == NGX_NIGHTWIND_LIGHT ? document.documentElement.classList.remove(NGX_NIGHTWIND_DARK) : document.documentElement.classList.add(NGX_NIGHTWIND_DARK);
};
