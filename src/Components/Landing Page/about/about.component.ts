import { Component } from '@angular/core';
import { assets } from '../../../assets/assets';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  assets = assets;
}
