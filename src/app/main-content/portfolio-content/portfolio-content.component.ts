import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-content',
  standalone: true,
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.scss'],
})
export class PortfolioContentComponent {
  selectedProject: string | null = null;

  selectProject(project: string): void {
    this.selectedProject = project;
    document.body.style.backgroundImage =
      project === 'join'
        ? "url('../../../assets/img/join-bg.png')"
        : "url('../../../assets/img/polloloco-bg.png')";
  }
}
