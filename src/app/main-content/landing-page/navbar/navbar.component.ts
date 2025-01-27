import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public languageService: LanguageService) {}
  activeLink: string | null = null;

  isMenuOpen: boolean = false;

  currentLanguage: string = 'DE';

  toggleLanguage() {
    this.languageService.switchLanguage();
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
