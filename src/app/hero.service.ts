import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http : HttpClient,
    private messageService: MessageService) { }

  // async method
  getHeroes(): Observable<Hero[]> {
    // return HEROES;
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }

}
