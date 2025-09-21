import { Component } from '@angular/core';
// import { OrderServiceComponent } from "../../Components/Service Page/order-service/order-service.component";
import { OrderFormComponent } from '../../Components/Orders/order-form/order-form.component';
import { HeaderComponent } from "../../Components/Landing Page/header/header.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrderFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
