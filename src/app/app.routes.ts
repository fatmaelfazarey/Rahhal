import { Routes } from '@angular/router';
import { LandingPageComponent } from '../Pages/landing-page/landing-page.component';
import { OrdersComponent } from '../Pages/orders/orders.component';
import { ServiceComponent } from '../Pages/service/service.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingPageComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'service/:serviceId', component: ServiceComponent }
];
