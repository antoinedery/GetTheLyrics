import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsDisplayPageComponent } from './lyrics-display-page.component';

describe('LyricsDisplayPageComponent', () => {
  let component: LyricsDisplayPageComponent;
  let fixture: ComponentFixture<LyricsDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricsDisplayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
