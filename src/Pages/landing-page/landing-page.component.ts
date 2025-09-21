import { Component } from '@angular/core';
import { HeaderComponent } from "../../Components/Landing Page/header/header.component";
import { HeroComponent } from "../../Components/Landing Page/hero/hero.component";
import { AboutComponent } from "../../Components/Landing Page/about/about.component";
import { HomeComponent } from "../../Components/Landing Page/home/home.component";
import { ServicesComponent } from "../../Components/Landing Page/services/services.component";
import { PackagesComponent } from "../../Components/Landing Page/packages/packages.component";
import { PartnersComponent } from "../../Components/Landing Page/partners/partners.component";
import { FAQComponent } from "../../Components/Landing Page/faq/faq.component";
import { TestimonialsComponent } from "../../Components/Landing Page/testimonials/testimonials.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { ContactComponent } from "../../Components/Landing Page/contact/contact.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, HomeComponent, ServicesComponent, PackagesComponent, PartnersComponent, FAQComponent, TestimonialsComponent, FooterComponent, ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
