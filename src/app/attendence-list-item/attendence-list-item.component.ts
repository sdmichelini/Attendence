import { Component, Input ,OnInit } from '@angular/core';

import { AttendenceItem } from '../attendence-item';

@Component({
  selector: 'app-attendence-list-item',
  templateUrl: './attendence-list-item.component.html',
  styleUrls: ['./attendence-list-item.component.css']
})
export class AttendenceListItemComponent implements OnInit {
  @Input() item: AttendenceItem;

  constructor() { }

  ngOnInit() {
  }

}
