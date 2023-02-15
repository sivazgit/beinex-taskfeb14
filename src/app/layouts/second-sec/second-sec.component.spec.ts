import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSecComponent } from './second-sec.component';

describe('SecondSecComponent', () => {
  let component: SecondSecComponent;
  let fixture: ComponentFixture<SecondSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
