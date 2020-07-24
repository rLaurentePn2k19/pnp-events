import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from 'src/app/data-models';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../event.service'


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Input() event: Event;
  @Output() id = new EventEmitter<number>();
  panelOpenState = false;

  constructor(private router: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEventData(this.router.snapshot.params.id).then(event => {
      this.event = event as Event
    })
  }

  sendId(data: number) {
    this.id.emit(data);
    console.log(data)
  }
}
