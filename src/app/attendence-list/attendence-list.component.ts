import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AttendenceEvent } from '../event';
import { AttendenceItem } from '../attendence-item';
import { EventAttendenceService } from '../event-attendence.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-attendence-list',
  templateUrl: './attendence-list.component.html',
  styleUrls: ['./attendence-list.component.css'],
  providers:[
    EventAttendenceService,
    EventsService
  ]
})
export class AttendenceListComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  attendence: AttendenceItem[];
  event: AttendenceEvent = {
    id: 0, 
    name: 'Finding Event...',
    when: new Date(0),
    type: 0
  };

  constructor(
    private route: ActivatedRoute, 
    private attendenceService: EventAttendenceService,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.attendenceService.getAttendenceForEvent(this.id).then(
        attendence => {
          this.attendence = attendence;
        }
      );
      this.eventsService.getEventById(this.id).then(
        event => {
          this.event = event;
        }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  presenceChange(item: AttendenceItem) {
    for(let i = 0; i < this.attendence.length; i++) {
      if(item.user.id == this.attendence[i].user.id) {
        this.attendence[i].presence = item.presence;
        break;
      }
    }
  }
 
}
