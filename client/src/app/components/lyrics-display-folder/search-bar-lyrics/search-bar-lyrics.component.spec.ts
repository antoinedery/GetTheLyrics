import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarLyricsComponent } from './search-bar-lyrics.component';

describe('SearchBarLyricsComponent', () => {
  let component: SearchBarLyricsComponent;
  let fixture: ComponentFixture<SearchBarLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarLyricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
