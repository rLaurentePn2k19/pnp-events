import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { EventsListComponent } from '../app/events/events-list.component'
import { EventRouteActivator } from './events/event-route-activator.service';
import { EventDetailsComponent } from '../app/events/event-details/event-details.component';


const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full' // default router view
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'event/:id', component: EventDetailsComponent
    },
    {
        // path: 'events', component: EventsListComponent, canActivate: [EventRouteActivator]
        path: 'events', component: EventsListComponent, pathMatch: 'full'

    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EventsListComponent, LoginComponent]