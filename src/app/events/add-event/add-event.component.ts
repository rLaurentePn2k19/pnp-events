import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Event } from 'src/app/data-models';


interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  @Output() event = new EventEmitter<Event>();


  selectedCategory: string;

  categories: Category[] = [
    { value: 'Comedy', viewValue: 'Entertainment' },
    { value: 'Fashion Show', viewValue: 'Fashion Show' },
    { value: 'Padient', viewValue: 'Padient' },
    { value: 'Musical Theatre', viewValue: 'Musical Theatre' },
    { value: 'Speech Choir', viewValue: 'Speech Choir' },
    { value: 'Drama', viewValue: 'Drama' },
    { value: 'Talent Show', viewValue: 'Talent Show' },
  ];


  constructor() { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
      speaker: new FormControl(),
      emcee: new FormControl(),
      time: new FormControl(),
      date: new FormControl(),
      duration: new FormControl(),
      venue: new FormGroup({
        address: new FormControl(),
        building: new FormControl(),
        room: new FormControl()
      }),
      onlineUrl: new FormControl(),
      participants: new FormControl([]),
      description: new FormControl()
    });
  }

  addEvent(eventForm: Event) {
    this.event.emit(eventForm);
  }



}
