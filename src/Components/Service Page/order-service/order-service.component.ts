
import { Component } from '@angular/core';
import { assets } from '../../../assets/assets';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-service',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './order-service.component.html',
  styleUrl: './order-service.component.css'
})
export class OrderServiceComponent {
  assets = assets;
}
