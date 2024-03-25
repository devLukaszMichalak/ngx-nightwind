# NgxNightwind

A library that provides a service with helper functions to manage nightwind dark mode easily in Angular.

## Instalation

Install nightwind as explained in https://github.com/jjranalli/nightwind?tab=readme-ov-file#installation and then run:

```sh
npm install ngx-nightwind
```

## Usage

First provide the NgxNightwind using `provideNgxNightwind()` method in your application config:
```ts
import { provideNgxNightwind } from 'ngx-nightwind';

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

Then you can use the service to manipulate the mode:

```ts
import { NgxNightwind } from 'ngx-nightwind';

...

//inject the service
constructor(private ngxNightwind: NgxNightwind) {
  
  // switches to light mode
  this.ngxNightwind.enableLight();
  
  // switches to dark mode
  this.ngxNightwind.enableDark();
  
  // toggle light/dark mode
  this.ngxNightwind.toggle();
  
  // gets the current mode, light or dark
  this.ngxNightwind.currentMode;
  
  // true if current mode is light
  this.ngxNightwind.isLight;
  
  // true if current mode is dark
  this.ngxNightwind.isDark;
  
}
```
