import { User } from './user';

export enum Presence {
    Present = 0,
    Excused,
    Unexecused,
    NotApplicable
}

export class AttendenceItem {
    user: User;
    event_id: number;// Links to one event_id
    presence: number;// Are they present
}
