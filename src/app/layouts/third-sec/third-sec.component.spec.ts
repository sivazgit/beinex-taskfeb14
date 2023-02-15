import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSecComponent } from './third-sec.component';

describe('ThirdSecComponent', () => {
  let component: ThirdSecComponent;
  let fixture: ComponentFixture<ThirdSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
