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
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  constructor(
    private scrollAnimationService: ScrollAnimationService,
    public languageService: LanguageService
  ) {}

  ngAfterViewInit(): void {
    this.scrollAnimationService.observe(this.animatedElements.toArray());
  }
}
