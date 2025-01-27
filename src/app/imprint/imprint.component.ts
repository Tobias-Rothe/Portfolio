import { Component } from '@angular/core';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { LanguageService } from '../language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(public languageService: LanguageService) {}
}
