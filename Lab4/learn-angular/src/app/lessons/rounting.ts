import { Component } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `<h2>User Page</h2>`,
})
export class UserComponent {}

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user', component: UserComponent },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a href="/">Home</a> |
      <a href="/user">User</a>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
