import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Components/Landing Page/header/header.component";
import { HeroComponent } from "../Components/Landing Page/hero/hero.component";
import { AboutComponent } from "../Components/Landing Page/about/about.component";
import { LandingPageComponent } from "../Pages/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rahhal';
}
