# NgxNightwind

A library that provides a service with helper functions to manage nightwind dark mode easily in Angular.

## Instalation

Install nightwind as explained in https://github.com/jjranalli/nightwind?tab=readme-ov-file#installation and then run:

```sh
npm install ngx-nightwind
```

## Usage

```ts
import { NgxNightwind } from 'ngx-nightwind';

...

//inject the service to init
constructor(private ngxNightwind: NgxNightwind) {
  
  // switches to light mode
  this.ngxNightwind.enableLight();
  
  // switches to dark mode
  this.ngxNightwind.enableDark();
  
  // toggle light/dark mode
  this.ngxNightwind.toggle();
}
```
