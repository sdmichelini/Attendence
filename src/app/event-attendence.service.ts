import { Injectable } from '@angular/core';

import { AttendenceItem, Presence } from './attendence-item';
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

  constructor() { }

  getAttendenceForEvent(event_id: number):Promise<AttendenceItem[]> {
    return Promise.resolve(ATTENDENCE.filter( item => {
      return item.event_id == event_id;
    }));
  }

}
