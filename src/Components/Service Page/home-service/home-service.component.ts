// import { Component, Input, OnInit } from '@angular/core';
// import { assets, ServicesImage } from '../../../assets/assets';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home-service',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home-service.component.html',
//   styleUrl: './home-service.component.css'
// })
// export class HomeServiceComponent implements OnInit {
//   assets = assets;
//   ServicesImage = ServicesImage;
//   @Input() serviceData: any;

//   constructor() {
//     // Still undefined here
//   }

//   ngOnInit() {
//     console.log("serviceData", this.serviceData); // Now available
//   }
// }

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesImage, assets } from '../../../assets/assets';

@Component({
  selector: 'app-home-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit, OnDestroy {
  @Input() serviceData: any;
  assets = assets;
  ServicesImage = ServicesImage;
  currentIndex: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.startImageRotation();
  }

  ngOnDestroy() {
    this.stopImageRotation();
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // تغيير الصورة كل 5 ثوانٍ
  }

  stopImageRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextImage() {
    if (this.serviceData && this.serviceData.images) {
      this.currentIndex = (this.currentIndex + 1) % this.serviceData.images.length;
    }
  }

  prevImage() {
    if (this.serviceData && this.serviceData.images) {
      this.currentIndex = (this.currentIndex - 1 + this.serviceData.images.length) % this.serviceData.images.length;
    }
  }

  setCurrentImage(index: number) {
    this.currentIndex = index;
    // إعادة تشغيل التدوير التلقائي بعد النقر على مؤشر الصورة
    this.stopImageRotation();
    this.startImageRotation();
  }

  get currentImage(): string {
    return this.serviceData?.images[this.currentIndex] || '';
  }
}