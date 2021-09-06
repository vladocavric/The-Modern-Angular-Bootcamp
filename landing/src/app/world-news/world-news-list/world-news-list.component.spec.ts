import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldNewsListComponent } from './world-news-list.component';

describe('WorldNewsListComponent', () => {
  let component: WorldNewsListComponent;
  let fixture: ComponentFixture<WorldNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
