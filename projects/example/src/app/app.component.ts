import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxNightwind } from 'ngx-nightwind'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private ngxNightwind = inject(NgxNightwind)
  
  toggle = () => this.ngxNightwind.toggle()
  light = () => this.ngxNightwind.enableLight()
  dark = () => this.ngxNightwind.enableDark()
}
