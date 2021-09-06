import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNewsListComponent } from './tech-news-list.component';

describe('TechNewsListComponent', () => {
  let component: TechNewsListComponent;
  let fixture: ComponentFixture<TechNewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechNewsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
