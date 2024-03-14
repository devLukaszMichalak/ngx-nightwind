import { Injectable } from '@angular/core';
import { NGX_NIGHTWIND_DARK, NGX_NIGHTWIND_LIGHT } from './ngx-nightwind-state';


@Injectable({
  providedIn: 'root'
})
export class NgxNightwind {
  
  constructor() {
    this.getInitialColorMode() == NGX_NIGHTWIND_LIGHT ? document.documentElement.classList.remove(NGX_NIGHTWIND_DARK) : document.documentElement.classList.add(NGX_NIGHTWIND_DARK);
  }
  
  toggle = (): void => {
    this.beforeTransition();
    
    if (!document.documentElement.classList.contains(NGX_NIGHTWIND_DARK)) {
      document.documentElement.classList.add(NGX_NIGHTWIND_DARK);
      window.localStorage.setItem('nightwind-mode', NGX_NIGHTWIND_DARK);
      
    } else {
      document.documentElement.classList.remove(NGX_NIGHTWIND_DARK);
      window.localStorage.setItem('nightwind-mode', NGX_NIGHTWIND_LIGHT);
      
    }
  };
  
  enableLight = (): void => this.enable(false);
  
  enableDark = (): void => this.enable(true);
  
  private enable = (value: boolean): void => {
    const mode = value ? NGX_NIGHTWIND_DARK : NGX_NIGHTWIND_LIGHT;
    const opposite = value ? NGX_NIGHTWIND_LIGHT : NGX_NIGHTWIND_DARK;
    
    this.beforeTransition();
    
    if (document.documentElement.classList.contains(opposite)) {
      document.documentElement.classList.remove(opposite);
    }
    
    document.documentElement.classList.add(mode);
    window.localStorage.setItem('nightwind-mode', mode);
  };
  
  private getInitialColorMode = (): string => {
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
  
  private beforeTransition = (): void => {
    const doc = document.documentElement;
    
    const onTransitionDone = (): void => {
      doc.classList.remove('nightwind');
      doc.removeEventListener('transitionend', onTransitionDone);
    };
    
    doc.addEventListener('transitionend', onTransitionDone);
    if (!doc.classList.contains('nightwind')) {
      doc.classList.add('nightwind');
    }
  };
}
