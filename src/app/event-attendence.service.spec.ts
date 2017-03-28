import { TestBed, inject } from '@angular/core/testing';

import { EventAttendenceService } from './event-attendence.service';

describe('EventAttendenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventAttendenceService]
    });
  });

  it('should ...', inject([EventAttendenceService], (service: EventAttendenceService) => {
    expect(service).toBeTruthy();
  }));
});
