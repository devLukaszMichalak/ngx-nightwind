import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { NgxNightwind } from './ngx-nightwind.service';
import { NGX_NIGHTWIND_DARK, NGX_NIGHTWIND_LIGHT } from './ngx-nightwind-state';

/**
 * Provide the NgxNightwind in your application config.
 * @param defaultMode Sets the default mode when no previous record in localStorage is present or when the user has chosen a preferred theme.
 * @returns A set of providers to set up NgxNightwindService.
 * @example
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     ...
 *     provideNgxNightwind(),
 *     // or use provideNgxNightwind('dark')
 *     ...
 *   ]
 * };
 * ```
 */
export const provideNgxNightwind = (defaultMode: typeof NGX_NIGHTWIND_LIGHT | typeof NGX_NIGHTWIND_DARK = NGX_NIGHTWIND_LIGHT): EnvironmentProviders =>
  makeEnvironmentProviders([
    {provide: NgxNightwind, useFactory: () => new NgxNightwind()},
    {provide: APP_INITIALIZER, useFactory: () => () => initializeNgxNightwind(defaultMode), multi: true}
  ]);

/**
 * Initializes NgxNightwind with the specified default mode.
 * @param defaultMode The default mode to initialize NgxNightwind with.
 */
const initializeNgxNightwind = (defaultMode: typeof NGX_NIGHTWIND_LIGHT | typeof NGX_NIGHTWIND_DARK) => {
  
  /**
   * Retrieves the initial color mode based on localStorage, user preferences,
   * or default mode.
   * @returns The initial color mode.
   */
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
