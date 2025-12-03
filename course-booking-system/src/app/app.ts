import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}
