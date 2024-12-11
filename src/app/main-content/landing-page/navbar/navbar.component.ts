import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  activeLink: string | null = null;

  isMenuOpen: boolean = false;

  currentLanguage: string = 'DE';

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'DE' ? 'EN' : 'DE';
    console.log(`Sprache geändert zu: ${this.currentLanguage}`);
    // Hier kannst du zusätzliche Logik implementieren, z. B. Inhalte dynamisch laden.
  }

  navLinks = [
    { label: 'About me', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
  ];

  setActive(linkId: string): void {
    this.activeLink = linkId;
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
