import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Import your assets and data
import { assets } from '../../assets/assets';
import { Services, NavBar } from '../../Store/Store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  assets = assets;
  Services = Services;
  NavBar = NavBar;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  // Navigate to section with smooth scroll
  navigateToSection(route: string, fragment: string | undefined = undefined): void {
    if (fragment) {
      // If we're already on the homepage and want to navigate to a specific section
      if (this.router.url === '/') {
        this.scrollToFragment(fragment);
      } else {
        // If we're on another page, navigate to the homepage then to the section
        this.router.navigate([route], { fragment: fragment }).then(() => {
          this.scrollToFragment(fragment);
        });
      }
    } else {
      // If there's no fragment, navigate normally
      this.router.navigate([route]);
    }
  }

  // Scroll to fragment
  private scrollToFragment(fragment: string): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  // Check if current route is active
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  
}