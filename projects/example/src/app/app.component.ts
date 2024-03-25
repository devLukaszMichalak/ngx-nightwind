import { Component, inject } from '@angular/core';
import { NgxNightwind } from 'ngx-nightwind';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private ngxNightwind: NgxNightwind) {
  }
  
  toggle = () => this.ngxNightwind.toggle()
  light = () => this.ngxNightwind.enableLight()
  dark = () => this.ngxNightwind.enableDark()
  
}
