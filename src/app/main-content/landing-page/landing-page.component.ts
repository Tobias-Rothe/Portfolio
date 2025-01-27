import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LetsTalkComponent } from '../lets-talk/lets-talk.component';
import { AboutComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioContentComponent } from '../portfolio-content/portfolio-content.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ImprintComponent } from '../../imprint/imprint.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    LetsTalkComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioContentComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
