import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from 'src/app/data-models';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: Event;
  @Output() id = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  sendId(data: number) {
    this.id.emit(data);
  }
}
