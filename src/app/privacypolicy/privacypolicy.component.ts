import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss',
})
export class PrivacypolicyComponent {
  constructor(public languageService: LanguageService) {}
}
