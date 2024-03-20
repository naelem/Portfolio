import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida fullstack',
      width: '100px',
      height: '51px',
      description: 
          '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivante ao ecossistema Angular.</p>',
      links: [
        {
          name:'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    }
  ])

  public openDialog(data: IProjects) {
    console.log(data)
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
