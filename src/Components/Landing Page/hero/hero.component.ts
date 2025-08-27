import { Component } from '@angular/core';
import { assets } from '../../../assets/assets';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  assets = assets
}
