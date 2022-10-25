import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTrackComponent } from './kanban-track.component';

describe('KanbanTrackComponent', () => {
  let component: KanbanTrackComponent;
  let fixture: ComponentFixture<KanbanTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
