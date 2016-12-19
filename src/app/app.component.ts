import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


const HEROES: Hero[] = [
   { id: 1, name: 'Luke Cage'},
    { id: 2, name: 'Blade'},
    { id: 3, name: 'Blue Marvel'},
    { id: 4, name: 'Storm'},
    { id: 5, name: 'Bishop'},
    { id: 6, name: 'War Machine'},
    { id: 7, name: 'Nick Fury'},
    { id: 8, name: 'Misty Knight'},
    { id: 9, name: 'Doctor Voodoo'},
    { id: 10, name: 'Spectrum'}
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
