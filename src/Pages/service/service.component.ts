import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesImage } from '../../assets/assets';
import { HomeServiceComponent } from "../../Components/Service Page/home-service/home-service.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, HomeServiceComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {
  ServicesImage = ServicesImage
  servicePageContent = {
    "dismantle": {
      name: "خدمه تفكيك الاساس",
      marketingSentence: 'فك أثاثك بسهولة وسرعة مع الحفاظ على سلامته',
      price: '350',
      time: '45',
      orders: "1200",
      CustomerSatisfaction: '%96',
      description: 'في رحّال نوفر خدمة فك الأساس بطريقة احترافية باستخدام أدوات حديثة وعلى يد فريق متخصص، لضمان عدم حدوث أي تلفيات للأثاث أو فقدان لقطع التركيب.',
      serviceFeatures: ['أدوات حديثة وآمنة.', 'أسعار تنافسية وباقات مرنة.', 'سرعة في التنفيذ مع الالتزام بالمواعيد.', 'فريق مدرَّب على جميع أنواع الأثاث.'],
      images: [ServicesImage.Service_img_18, ServicesImage.Service_img_09, ServicesImage.Service_img_39, ServicesImage.Service_img_20, ServicesImage.Service_img_12]
    },
  }

  constructor(private route: ActivatedRoute) {
    console.log("serviceData" + this.servicePageContent.dismantle)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('serviceId');
      console.log('Service ID:', serviceId);
    });
  }

}