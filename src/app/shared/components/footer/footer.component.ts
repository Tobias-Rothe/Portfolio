import { Component } from '@angular/core';
import { ImprintComponent } from '../../../imprint/imprint.component';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public languageService: LanguageService) {}
}
