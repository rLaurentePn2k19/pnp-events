import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Participant } from '../data-models';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styles: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit, OnDestroy {
  // events: Event[] = EVENTS;
  events: Event[];
  event: Event;
  isViewingList = true;
  getEventsSubscription: Subscription;

  displayedColumns: string[] = ['ID', 'Event name', 'Action'];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    // this.events = this.eventService.getEvents();
    this.getEventsSubscription = this.eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log(this.events, " events");
    });
    this.eventService.currentUserAccount.subscribe(currentUser => {
      console.log(currentUser, " current User")
    })
  }

  ngOnDestroy() {
    this.getEventsSubscription.unsubscribe();
  }

  sendId(data: number) {
    this.events.map(event => {
      if (event.id === data) {
        this.event = event;
        this.isViewingList = false;
      }
    });
    // this.event = this.eventService.sendId(data);
  }

  returnToListView() {
    this.isViewingList = true;
  }

  addNewParticipant(participant: Participant) {
    this.events.map(event => {
      if (event.id === this.event.id) {
        event.participants.push(participant);
        this.eventService.updateEvent(event);
      }
    });
  }

  addEvent(event: Event) {
    this.eventService.addEvent(event);
    // event.id = this.events.length;
    // this.events.push(event);
  }

  ViewEvent(event: Event){
    console.log(event, " event");
    
  }
}

