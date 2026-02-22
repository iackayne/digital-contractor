import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Calendar } from './pages/calendar/calendar';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { ServiceRequest } from './pages/service-request/service-request';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'dashboard', component: Dashboard },
  { path: 'calendar', component: Calendar },
  { path: 'service-request', component: ServiceRequest },
];
