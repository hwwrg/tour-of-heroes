import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';

  /*   hero: Hero = {
      id: 1,
      name: 'Windstorm'
    }; */

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // observable
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // cycle de vie hook
  ngOnInit(): void {
    this.getHeroes();

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent : Selected hero id=${hero.id}`);
  }


}
