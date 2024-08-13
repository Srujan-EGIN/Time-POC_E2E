import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracktimeComponent } from './tracktime.component';

describe('TracktimeComponent', () => {
  let component: TracktimeComponent;
  let fixture: ComponentFixture<TracktimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracktimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracktimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
