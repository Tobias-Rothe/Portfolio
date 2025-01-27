import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ScrollAnimationService } from '../../../scroll-animation.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  constructor(
    private scrollAnimationService: ScrollAnimationService,
    public languageService: LanguageService
  ) {}

  ngAfterViewInit(): void {
    this.scrollAnimationService.observe(this.animatedElements.toArray());
  }
}
