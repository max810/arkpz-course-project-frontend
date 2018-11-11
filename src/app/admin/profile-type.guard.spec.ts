import { TestBed, async, inject } from '@angular/core/testing';

import { ProfileTypeGuard } from './profile-type.guard';

describe('ProfileTypeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileTypeGuard]
    });
  });

  it('should ...', inject([ProfileTypeGuard], (guard: ProfileTypeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
