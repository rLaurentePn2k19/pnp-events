import { Component, OnInit } from '@angular/core';
import { Event, Participant } from '../data-models';
import { EventService } from '../event.service';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styles: ['.body-content { font-size: 25px; }']
})

export class EventsListComponent implements OnInit {
    // events: Event[] = EVENTS;
    events: Event[];
    event: Event;
    isViewingList = true    ;

    constructor(private eventService: EventService) { }

    ngOnInit() {
      this.events = this.eventService.getEvents();
    }

    sendId(data: number) {
      this.event = this.eventService.sendId(data);
      this.isViewingList = false;
    }

    returnToListView() {
      this.isViewingList = true;
    }

    addNewParticipant(participant: Participant) {
      this.eventService.addParticipants(participant);
    }

    addEvent(event: Event) {
      this.eventService.addEvent(event);
      // event.id = this.events.length;
      // this.events.push(event);
    }
}

