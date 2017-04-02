import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AttendenceEvent } from './event';
import { environment } from '../environments/environment';

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

  constructor(private http:Http) { }
  /**
   * Get all of the events
   */
  getEvents(): Observable<AttendenceEvent[]> {
    return this.http.get(environment.url+'/api/events')
      .map(this.extractData)
      .catch(this.handleError);

  }

  getEventById(id: number): Promise<AttendenceEvent> {
    return Promise.resolve(EVENTS.filter(event => {
      return event.id == id;
    })[0]);
  } 

  private extractData(res: Response) {
    let body = res.json();
    let events: AttendenceEvent[] = [];
    for(let value of body.events) {
      // Turn it into our event
      let event: AttendenceEvent;
      event = { 
        id: value.id, 
        name: value.name, 
        when: new Date(value.when), 
        type: value.type
      };
      console.log(event);
      events.push(event);
    }
    return events || [];
  }
  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
