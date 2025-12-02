import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main>
      <h1></h1>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `main { font-family: Arial, Helvetica, sans-serif; padding: 1rem; }`
  ]
})
export class AppComponent {}
