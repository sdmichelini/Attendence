import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AttendenceItem, Presence } from './attendence-item';
import { environment } from '../environments/environment';
import { User } from './user';

const user1: User = { name: 'Jeff', id: 'xyz'};
const user2: User = { name: 'Rick', id: 'abc'};

const ATTENDENCE:AttendenceItem[] = [
  { user: user1, event_id: 1, presence: Presence.Present },
  { user: user2, event_id: 1, presence: Presence.Present },
  { user: user1, event_id: 2, presence: Presence.Excused }
];

@Injectable()
export class EventAttendenceService {

  constructor(private http:Http) { }

  getAttendenceForEvent(event_id: number):Observable<AttendenceItem[]> {
    return this.http.get(environment.url+`/api/attendence?event_id=${event_id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    let items: AttendenceItem[] = [];
    for(let value of body.attendence) {
      // Turn it into our attendence item
      let item: AttendenceItem;
      item = { 
        event_id: value.event_id, 
        presence: value.presence, 
        user: value.user
      };
      items.push(item);
    }
    return items || [];
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
