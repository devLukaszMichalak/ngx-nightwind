import { Injectable } from '@angular/core';
import { NGX_NIGHTWIND_DARK, NGX_NIGHTWIND_LIGHT } from './ngx-nightwind-state';

/**
 * NgxNightwind service allows manipulation of the nightwind mode.
 */
@Injectable()
export class NgxNightwind {
  
  /**
   * Toggles between dark and light mode.
   */
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
  
  /**
   * Enables light mode.
   */
  enableLight = (): void => this.enable(false);
  
  /**
   * Enables dark mode.
   */
  enableDark = (): void => this.enable(true);
  
  /**
   * Retrieves the current mode.
   * @returns The current mode as a string, either 'light' or 'dark'.
   */
  get currentMode(): typeof NGX_NIGHTWIND_LIGHT | typeof NGX_NIGHTWIND_DARK {
    return document.documentElement.classList.contains(NGX_NIGHTWIND_DARK) ? NGX_NIGHTWIND_DARK : NGX_NIGHTWIND_LIGHT;
  }
  
  /**
   * Checks if the current mode is light.
   * @returns True if the current mode is light, otherwise false.
   */
  get isLight(): boolean {
    return document.documentElement.classList.contains(NGX_NIGHTWIND_LIGHT);
  }
  
  /**
   * Checks if the current mode is dark.
   * @returns True if the current mode is dark, otherwise false.
   */
  get isDark(): boolean {
    return document.documentElement.classList.contains(NGX_NIGHTWIND_DARK);
  }
  
  /**
   * Private method to enable a specific mode.
   * @param value - A boolean value indicating whether to enable dark mode (true) or light mode (false).
   */
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
  
  /**
   * Private method to handle the transition effect when changing modes.
   */
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
