import { Injectable } from '@angular/core';

import { AttendenceEvent } from './event';

const EVENTS: AttendenceEvent[] = [
  { id: 1, name: "My Test Event", when: new Date(0), type: 0},
  { id: 2, name: "My Test Event 2", when: new Date(0), type: 0}
];

/**
 * This is the events service.
 * 
 * It will provide a list of all of the events
 */

@Injectable()
export class EventsService {

  constructor() { }
  /**
   * Get all of the events
   */
  getEvents(): Promise<AttendenceEvent[]> {
    return Promise.resolve(EVENTS);
  }

  getEventById(id: number): Promise<AttendenceEvent> {
    return Promise.resolve(EVENTS.filter(event => {
      return event.id == id;
    })[0]);
  } 

}
