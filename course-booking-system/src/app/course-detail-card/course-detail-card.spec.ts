import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailCard } from './course-detail-card';

describe('CourseDetailCard', () => {
  let component: CourseDetailCard;
  let fixture: ComponentFixture<CourseDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
