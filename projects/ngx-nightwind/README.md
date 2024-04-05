# NgxNightwind

NgxNightwind is a library that provides a service with helper functions to easily manage nightwind dark mode in Angular applications.

## Instalation

Before installing NgxNightwind, make sure to install Nightwind as explained in
<a href="https://github.com/jjranalli/nightwind?tab=readme-ov-file#installation">Nightwind GitHub repository</a>, then run:
```sh
npm install ngx-nightwind
```

## Usage

First, provide the NgxNightwindService using the `provideNgxNightwind()` method in your application configuration:
```ts
import { provideNgxNightwind } from 'ngx-nightwind';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideNgxNightwind(),
    // or use provideNgxNightwind('dark') 
    // to override the default light mode 
    // when no preferred theme is set 
    // or no previous record in localStorage is present
  ]
};
```

After providing the service, you can use it to manipulate the mode in your components:

```ts
import { NgxNightwind } from 'ngx-nightwind';

...

// Inject the service in your component constructor
constructor(private ngxNightwind: NgxNightwind) {
  
  // Switches to light mode
  this.ngxNightwind.enableLight();
  
  // Switches to dark mode
  this.ngxNightwind.enableDark();
  
  // Toggles between light and dark mode
  this.ngxNightwind.toggle();
  
  // Gets the current mode: 'light' or 'dark'
  this.ngxNightwind.currentMode;
  
  // Returns true if the current mode is light
  this.ngxNightwind.isLight;
  
  // Returns true if the current mode is dark
  this.ngxNightwind.isDark;
  
}
```

## Contribution
Feel free to contribute to NgxNightwind by opening issues or pull requests in the GitHub repository.

## License
NgxNightwind is licensed under the MIT License. NgxNightwind is a library that provides a service with helper functions to easily manage nightwind dark mode in Angular applications.
