import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from '@nx-workspace/customers';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Home',
    component: CustomersComponent,
  },
  {
    path: 'customers',
    title: 'Customers',
    loadComponent: () =>
      import('@nx-workspace/customers').then((m) => m.CustomersComponent),
  },
];