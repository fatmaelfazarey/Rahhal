import { Component, Input, OnInit, OnDestroy, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesImage, ServicesVideo, assets } from '../../../assets/assets';
@Component({
  selector: 'app-home-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() serviceData: any;
  @ViewChild('backgroundVideo') videoElement!: ElementRef<HTMLVideoElement>;

  assets = assets;
  ServicesImage = ServicesImage;
  ServicesVideo = ServicesVideo;

  currentMediaUrl: string = '';
  currentIndex: number = 0;
  isVideo: boolean = false;
  private intervalId: any;
  private mediaArray: any[] = [];
  private usedIndices: Set<number> = new Set();

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.prepareMediaArray();

    if (this.mediaArray.length > 0) {
      this.setRandomMedia();
      this.startMediaRotation();
    }
  }

  ngAfterViewInit() {
    this.setupVideoAutoplay();
  }

  ngOnDestroy() {
    this.stopMediaRotation();
  }

  // تجهيز مصفوفة الوسائط من الصور والفيديوهات
  prepareMediaArray() {
    this.mediaArray = [];

    // إضافة الصور أولاً
    if (this.serviceData?.images?.length > 0) {
      this.serviceData.images.forEach((image: string) => {
        this.mediaArray.push({ type: 'image', url: image });
      });
    }

    // إضافة الفيديوهات
    if (this.serviceData?.videos?.length > 0) {
      this.serviceData.videos.forEach((video: string) => {
        this.mediaArray.push({ type: 'video', url: video });
      });
    }
  }

  // تهيئة التشغيل التلقائي للفيديو
  setupVideoAutoplay() {
    if (this.videoElement && this.isVideo) {
      const video = this.videoElement.nativeElement;
      video.muted = true; // كتم الصوت
      video.loop = true; // تكرار الفيديو

      // محاولة تشغيل الفيديو تلقائياً
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('تشغيل الفيديو التلقائي فشل، سيتم إعادة المحاولة:', error);
          // إعادة المحاولة بعد فترة
          setTimeout(() => {
            video.play().catch(e => console.log('لا يزال غير ممكن تشغيل الفيديو:', e));
          }, 1000);
        });
      }
    }
  }

  startMediaRotation() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.setRandomMedia();
        });
      }, 5000); // تغيير الوسائط كل 5 ثواني
    });
  }

  stopMediaRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // اختيار وسائط عشوائية مع ضمان عدم التكرار حتى تنتهي جميع الوسائط
  setRandomMedia() {
    if (this.mediaArray.length === 0) return;

    // إذا تم عرض جميع الوسائط، ابدأ مجموعة جديدة
    if (this.usedIndices.size >= this.mediaArray.length) {
      this.usedIndices.clear();
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.mediaArray.length);
    } while (this.usedIndices.has(randomIndex));

    this.usedIndices.add(randomIndex);
    this.currentIndex = randomIndex;

    const media = this.mediaArray[this.currentIndex];
    this.currentMediaUrl = media.url;
    this.isVideo = media.type === 'video';

    // إذا كان الفيديو، ننتظر حتى يتم تحميل العنصر في العرض
    if (this.isVideo) {
      setTimeout(() => {
        this.setupVideoAutoplay();
      }, 100);
    }
  }

  // للتحكم اليدوي (إذا كنت تريدين إضافة أزرار للتحكم)
  nextMedia() {
    this.setRandomMedia();
    this.restartRotation();
  }

  prevMedia() {
    this.setRandomMedia();
    this.restartRotation();
  }

  setSpecificMedia(index: number) {
    if (this.mediaArray.length > 0 && index >= 0 && index < this.mediaArray.length) {
      this.currentIndex = index;
      const media = this.mediaArray[this.currentIndex];
      this.currentMediaUrl = media.url;
      this.isVideo = media.type === 'video';

      this.usedIndices.add(index);

      // إذا كان الفيديو، ننتظر حتى يتم تحميل العنصر في العرض
      if (this.isVideo) {
        setTimeout(() => {
          this.setupVideoAutoplay();
        }, 100);
      }

      this.restartRotation();
    }
  }

  private restartRotation() {
    this.stopMediaRotation();
    this.startMediaRotation();
  }
}