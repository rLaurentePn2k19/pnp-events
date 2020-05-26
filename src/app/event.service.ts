import { Injectable } from '@angular/core';
import { Event, Participant } from './data-models';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EventService {
  event: Event;

  private eventsCollection: AngularFirestoreCollection<Event>;
  private eventDoc: AngularFirestoreDocument<Event>;
  events: Observable<Event[]>;

  constructor(private afs: AngularFirestore) {
    this.eventsCollection = afs.collection<Event>('events', ref => ref.orderBy('id', 'asc'));
    this.events = this.eventsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Event;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getEvents() {
      return this.events;
  }

  addEvent(event: Event) {
    this.eventsCollection.ref.get().then(querySnapshot => {
      console.log(querySnapshot.size);
      event.id = querySnapshot.size;
      this.eventsCollection.add(event);
    });
  }

  updateEvent(event: Event) {
    this.eventsCollection.ref.where('id', '==', event.id)
      .get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.eventDoc = this.afs.doc<Event>('events/' + doc.id);
          this.eventDoc.update(event);
        });
      });
  }
}

