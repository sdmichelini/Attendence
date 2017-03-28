import { Component, OnInit } from '@angular/core';
// Services
import { EventsService } from '../events.service';
// Models
import { AttendenceEvent } from '../event'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventsService]
})
export class EventListComponent implements OnInit {

  events: AttendenceEvent[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    // Load the promise
    this.eventService.getEvents().then(events => {
      this.events = events;
    });
  }

}
