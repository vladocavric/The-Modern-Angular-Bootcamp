import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaninatorComponent } from './paninator.component';

describe('PaninatorComponent', () => {
  let component: PaninatorComponent;
  let fixture: ComponentFixture<PaninatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaninatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaninatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
