import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideNgxNightwind } from '../../../ngx-nightwind/src/lib/ngx-nightwind.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [provideNgxNightwind()],
  bootstrap: [AppComponent]
})
export class AppModule { }
