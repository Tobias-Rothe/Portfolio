import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  inject,
} from '@angular/core';
import { ScrollAnimationService } from '../../../scroll-animation.service';
import { LanguageService } from '../../language.service';

@Component({
  standalone: true,
  selector: 'app-portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: [
    './portfolio-content.component.scss',
    './portfolio-content2.component.scss',
  ],
})
export class PortfolioContentComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  languageService = inject(LanguageService);
  selectedProject: string | null = null;

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    this.scrollAnimationService.observe(this.animatedElements.toArray());
  }

  selectProject(project: string): void {
    this.selectedProject = project;
    document.body.style.backgroundImage =
      project === 'join'
        ? "url('./../../../assets/img/join-bg.png')"
        : "url('./../../../assets/img/polloloco-bg.png')";
  }
}
