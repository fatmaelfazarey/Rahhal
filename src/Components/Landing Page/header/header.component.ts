import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { assets } from '../../../assets/assets';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  assets = assets;
  NavBar = [
    { text: "الرئيسية", navigateTo: "/", fragment: undefined },
    { text: "من نحن", navigateTo: "/", fragment: "about" },
    { text: "خدمات", navigateTo: "/", fragment: 'services' },
    { text: "باقات", navigateTo: "/", fragment: 'packages' },
    { text: "اتصل بنا", navigateTo: "/", fragment: 'contact' }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  // Close menu when clicking outside
  handleBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.closeMenu();
    }
  }

  // Close menu when pressing Escape key
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }

  // Check if current route is active
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent scrolling when menu is open
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  // Navigate to section with smooth scroll
  navigateToSection(route: string, fragment: string | undefined = undefined): void {
    this.closeMenu();

    if (fragment) {
      // إذا كنا بالفعل في الصفحة الرئيسية ونريد الانتقال إلى قسم معين
      if (this.router.url === '/') {
        this.scrollToFragment(fragment);
      } else {
        // إذا كنا في صفحة أخرى، ننتقل إلى الرئيسية ثم ننتقل إلى القسم
        this.router.navigate([route], { fragment: fragment }).then(() => {
          this.scrollToFragment(fragment);
        });
      }
    } else {
      // إذا لم يكن هناك fragment، انتقل إلى الصفحة بشكل عادي
      this.router.navigate([route]);
    }
  }

  // Scroll to fragment smoothly
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
}