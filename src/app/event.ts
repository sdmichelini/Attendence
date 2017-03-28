/**
 * Metadata for an Event
 * 
 * An event is basically something that multiple people were present for
 */
export class AttendenceEvent {
    id: number; // Unique Id for the event
    name: string; // Name of the event
    when: Date; // What day and time was the event?
    type: number; // What type of event is it?
}
