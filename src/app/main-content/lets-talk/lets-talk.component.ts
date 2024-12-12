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
  selector: 'app-lets-talk',
  standalone: true,
  imports: [],
  templateUrl: './lets-talk.component.html',
  styleUrl: './lets-talk.component.scss',
})
export class LetsTalkComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  constructor(
    private scrollAnimationService: ScrollAnimationService,
    public languageService: LanguageService
  ) {}

  ngAfterViewInit(): void {
    this.scrollAnimationService.observe(this.animatedElements.toArray());
  }
}
