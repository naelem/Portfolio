import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida fullstack',
      width: '100px',
      height: '51',
      description: 
          '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivante ao ecossistema Angular.</p>',
      link: [
        {
          name:'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    }
  ])
}
