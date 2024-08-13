import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomwpageComponent } from './homwpage.component';

describe('HomwpageComponent', () => {
  let component: HomwpageComponent;
  let fixture: ComponentFixture<HomwpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomwpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomwpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
