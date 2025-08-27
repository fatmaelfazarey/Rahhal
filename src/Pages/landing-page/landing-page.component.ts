import { Component } from '@angular/core';
import { HeaderComponent } from "../../Components/Landing Page/header/header.component";
import { HeroComponent } from "../../Components/Landing Page/hero/hero.component";
import { AboutComponent } from "../../Components/Landing Page/about/about.component";
import { HomeComponent } from "../../Components/Landing Page/home/home.component";
import { ServicesComponent } from "../../Components/Landing Page/services/services.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, HomeComponent, ServicesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
