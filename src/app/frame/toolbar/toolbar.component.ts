import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../data-models';
import { EventService } from '../../event.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    constructor(private eventService: EventService, private router: Router) {

    }

    ngOnInit(): void {
    }

    addEvent(event: Event) {
        this.eventService.addEvent(event);
    }

    logout(){
        this.eventService.updateCurrentUser({
            username: '',
            password: ''
        }) 
        this.router.navigate(['/login']);
    }
}
