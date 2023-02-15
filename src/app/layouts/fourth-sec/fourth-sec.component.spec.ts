import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthSecComponent } from './fourth-sec.component';

describe('FourthSecComponent', () => {
  let component: FourthSecComponent;
  let fixture: ComponentFixture<FourthSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
