import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  private observer: IntersectionObserver;

  constructor() {
    const observerOptions = {
      root: null,
      rootMargin: '-10px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver(
      this.onIntersection,
      observerOptions
    );
  }

  observe(elements: ElementRef[]): void {
    elements.forEach((element) => {
      this.observer.observe(element.nativeElement);
    });
  }

  private onIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in-left');
        entry.target.classList.remove('hidden');
      } else {
        entry.target.classList.remove('slide-in-left');
        entry.target.classList.add('hidden');
      }
    });
  };
}
