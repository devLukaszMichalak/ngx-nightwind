import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxNightwind } from '../../../ngx-nightwind/src/lib/ngx-nightwind.service';

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
}
