import { Component } from '@angular/core';
import { assets } from '../../../assets/assets';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  assets = assets;
  services = [
{ serviceName: "فك الأساس", serviceImage: assets.service_5, navigateTo: "dismantle", fragment: undefined },
{ serviceName: "تركيب الأساس", serviceImage: assets.service_4, navigateTo: "assemble", fragment: undefined },
{ serviceName: "نقل الأساس", serviceImage: assets.service_3, navigateTo: "moving", fragment: undefined },
{ serviceName: "تغليف", serviceImage: assets.service_2, navigateTo: "packing", fragment: undefined },
{ serviceName: "شحن", serviceImage: assets.service_1, navigateTo: "shipping", fragment: undefined },
{ serviceName: "تنظيف بعد النقل", serviceImage: assets.service_6, navigateTo: "cleaning", fragment: undefined }


  ]

}
