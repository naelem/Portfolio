import { CommonModule } from '@angular/common'; 
import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Front-end Developer",
        p: "Bart | Fevereiro 2024 - Presente",
      },
      text: "Atualmente atuando como Front-end Developer, utilizando Html5, CSS3, Javascript, Typescript e Angular."
    } ,
    {
      summary: {
        strong: "UI Designer",
        p: "Bart | Junho 2023 - Feveiro 2024",
      },
      text: "Durante esse período na Bart atuei como estagiaria de UI/UX Design, tive a oportunidade de explorar minha criatividade da criação de interface até testes de usabilidade. "
    } 
  ])
}
