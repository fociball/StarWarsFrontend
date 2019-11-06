import { Injectable } from '@angular/core';
import { People } from './people';
import { PEOPLES } from './mock-people';
import {Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private messageService: MessageService) { }

  getPerson(id: number): Observable<People> {
    this.messageService.add(`fetched a person! id = ${id}`);
    return of(PEOPLES.find(people => people.id === id));
  }

  getPeople(): Observable<People[]> {
    this.messageService.add(`fetched a person!`);
    return of(PEOPLES);
  }
}
