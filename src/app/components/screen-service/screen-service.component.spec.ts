import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenServiceComponent } from './screen-service.component';

describe('ScreenServiceComponent', () => {
  let component: ScreenServiceComponent;
  let fixture: ComponentFixture<ScreenServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
