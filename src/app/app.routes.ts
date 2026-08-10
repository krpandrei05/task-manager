import { Routes } from '@angular/router';
import { MainLayout } from './main-layout/main-layout';
import { Homepage } from './homepage/homepage';
import { MyTasks } from './my-tasks/my-tasks';
import { Auth } from './auth/auth';
import { Admin } from './admin/admin';
import { loggedInGuard } from './guards/logged-in-guard';
import { guestGuard } from './guards/guest-guard';
import { adminGuard } from './guards/admin-guard';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    canActivate: [loggedInGuard],
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: Homepage },
      { path: 'about', component: About},
      { path: 'my-tasks', component: MyTasks },
      { path: 'admin', component: Admin, canActivate: [adminGuard] },
    ],
  },
  { path: 'auth', component: Auth, canActivate: [guestGuard] },
];
