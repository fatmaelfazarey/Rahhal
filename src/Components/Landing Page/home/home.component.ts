import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { assets } from '../../../assets/assets';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './home.component.html',  // Changed to templateUrl
  styleUrl: './home.component.css'
})
export class HomeComponent {
  assets = assets;
}