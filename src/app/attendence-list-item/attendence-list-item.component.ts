import { Component, EventEmitter, Input , OnInit, Output } from '@angular/core';

import { AttendenceItem } from '../attendence-item';

@Component({
  selector: 'app-attendence-list-item',
  templateUrl: './attendence-list-item.component.html',
  styleUrls: ['./attendence-list-item.component.css']
})
export class AttendenceListItemComponent implements OnInit {
  @Input() item: AttendenceItem;
  @Output() presenceChange:EventEmitter<AttendenceItem> 
    = new EventEmitter<AttendenceItem>();

  constructor() { }

  ngOnInit() {
  }

   // When the presence button is clicked
  presenceButtonClicked(presence: number) {
    // Clone current item
    let newItem: AttendenceItem = {...this.item, presence: presence};
    this.presenceChange.emit(newItem);
  }

  getButtonStyle(presence: number) {
    let style: string;
    switch(presence) {
      case 1:
        style = 'btn btn-success';
        break;
      case 2:
        style = 'btn btn-primary';
        break;
      case 3:
        style = 'btn btn-danger';
        break;
      default:
        style = 'btn btn-default';
        break;
    }
    // Make selected button active
    if(presence == this.item.presence) {
      style = style + ' active';
    }

    return style;
  }
}
