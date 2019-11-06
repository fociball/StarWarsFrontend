import { Component, OnInit } from '@angular/core';
import {People} from '../people';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples: People[];
  selectedPeople: People;

  onSelect(people: People): void {
    this.selectedPeople = people;
  }

  constructor(private peopleService: PeopleService) { }

  getPeople(): void {
    this.peopleService.getPeople()
    .subscribe(peoples => this.peoples = peoples);
  }

  ngOnInit() {
    this.getPeople();
  }

}
