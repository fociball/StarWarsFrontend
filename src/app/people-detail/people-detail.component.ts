import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { PeopleService} from '../people.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
@Input() people: People;

  constructor(
    private rout: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    const id = +this.rout.snapshot.paramMap.get('id');
    this.peopleService.getPerson(id)
    .subscribe(people => this.people = people);
  }

  goBack(): void {
    this.location.back();
  }

}
