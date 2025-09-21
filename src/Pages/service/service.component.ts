import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesImage } from '../../assets/assets';
import { HomeServiceComponent } from "../../Components/Service Page/home-service/home-service.component";
import { FeaturesSectionComponent } from "../../Components/Service Page/features-section/features-section.component";
import { ServicesContentService } from '../../Services/services-content.service';
import { OrderServiceComponent } from "../../Components/Service Page/order-service/order-service.component";
import { FAQComponent } from "../../Components/Landing Page/faq/faq.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, HomeServiceComponent, FeaturesSectionComponent, OrderServiceComponent, FAQComponent, FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {
  ServicesImage = ServicesImage;
  serviceId: string = 'dismantle'; // تغيير النوع إلى string
  currentService: any; // استخدام any لتجنب مشاكل التوافق

  // احذف كتلة servicePageContent بالكامل من هنا

  constructor(
    private route: ActivatedRoute,
    private servicesContentService: ServicesContentService // إضافة الـService
  ) { }

  ngOnInit() {
    this.initializeServiceData();
  }

  private initializeServiceData() {
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('serviceId');
      if (serviceId && this.isValidServiceId(serviceId)) {
        this.serviceId = serviceId;
        this.currentService = (this.servicesContentService.getAllServices() as any)[this.serviceId];
        this.logServiceInfo();
      } else {
        // القيمة الافتراضية إذا لم يكن serviceId صحيحًا
        this.serviceId = 'dismantle';
        this.currentService = (this.servicesContentService.getAllServices() as any)[this.serviceId];
      }
    });
  }

  private isValidServiceId(id: string): boolean {
    // الحصول على جميع الخدمات من الـService والتحقق من وجود المفتاح
    const allServices = this.servicesContentService.getAllServices();
    return id in allServices;
  }

  private logServiceInfo() {
    console.log('Service ID:', this.serviceId);
    if (this.currentService) {
      console.log('Service Name:', this.currentService.name);
    }
  }
}