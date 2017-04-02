import { Component, OnInit } from '@angular/core';
// Services
import { EventsService } from '../events.service';
// Models
import { AttendenceEvent, AttendenceType } from '../event'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventsService]
})
export class EventListComponent implements OnInit {

  events: AttendenceEvent[];
  error: any;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.error = undefined;
    this.getEvents();
  }

  getEvents() {
    // Load the promise
    this.eventService.getEvents().subscribe(
                     events => this.events = events,
                     error =>  this.setError(error));
  }
    /**
 * Get the string for the associated type
 */
  getTypeString(event :AttendenceEvent):string {
      let typeString: string;
      switch(event.type) {
          case AttendenceType.MEETING:
              typeString = 'Meeting';
              break;
          case AttendenceType.WORK_PARTY:
              typeString = 'Work Party';
              break;
          case AttendenceType.JOBS:
              typeString = 'House Jobs';
              break;
          default:
              typeString = 'Uncategorized';
      }
      return typeString;
  }

  setError(error: any) {
      this.error = {'msg':'Error Loading Events.'};
  }


}
