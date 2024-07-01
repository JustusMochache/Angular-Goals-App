import { Component } from '@angular/core';
import { Goal } from './goal';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // goal = 'Watch Finding Nemo';

  goals:Goal = [
    {id:1, name:'Samsung S24'},
    {id:2, name:'Imac Desktop'},
    {id:3, name:'TV'},
    {id:4, name:'Library'},
    {id:5, name:'Projects'},
  ];

}
