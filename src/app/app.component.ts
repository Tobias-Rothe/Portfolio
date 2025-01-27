import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const scrollContainer = document.querySelector('.top');
        if (scrollContainer) {
          scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = (event.target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          event.preventDefault();

          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  title = 'Portfolio';
}
