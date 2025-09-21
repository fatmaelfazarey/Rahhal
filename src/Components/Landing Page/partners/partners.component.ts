// import { Component } from '@angular/core';
// import { ServicesVideo } from '../../../assets/assets';

// @Component({
//   selector: 'app-partners',
//   standalone: true,
//   imports: [],
//   templateUrl: './partners.component.html',
//   styleUrl: './partners.component.css'
// })
// export class PartnersComponent {
//   ServicesVideo = ServicesVideo;
// }
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ServicesVideo } from '../../../assets/assets';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements AfterViewInit {
  ServicesVideo = ServicesVideo;
  videoError = false;
  
  @ViewChild('backgroundVideo', { static: true }) 
  videoRef!: ElementRef;
  
  ngAfterViewInit() {
    this.setupVideo();
  }
  
  setupVideo() {
    const video = this.videoRef.nativeElement;
    
    // محاولة تشغيل الفيديو
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch((error: any) => {
        console.log('تم منع التشغيل التلقائي:', error);
        this.videoError = true;
      });
    }
  }
  
  togglePlayback() {
    const video = this.videoRef.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  
  toggleMute() {
    const video = this.videoRef.nativeElement;
    video.muted = !video.muted;
  }
  
  onVideoError() {
    this.videoError = true;
    console.error('فشل تحميل الفيديو');
  }
}