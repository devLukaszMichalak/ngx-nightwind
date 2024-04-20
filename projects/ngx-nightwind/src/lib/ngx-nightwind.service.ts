import { Injectable } from '@angular/core';
import { NGX_NIGHTWIND_DARK, NGX_NIGHTWIND_LIGHT } from './ngx-nightwind-state';

/*
 * NgxNightwind service allows manipulation of the nightwind mode.
 */
@Injectable()
export class NgxNightwind {
  
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
  
  get currentMode(): typeof NGX_NIGHTWIND_LIGHT | typeof NGX_NIGHTWIND_DARK {
    return document.documentElement.classList.contains(NGX_NIGHTWIND_DARK) ? NGX_NIGHTWIND_DARK : NGX_NIGHTWIND_LIGHT;
  }
  
  get isLight(): boolean {
    return !this.isDark;
  }
  
  get isDark(): boolean {
    return document.documentElement.classList.contains(NGX_NIGHTWIND_DARK);
  }
  
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
