import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookhallComponent } from './bookhall.component';

describe('BookhallComponent', () => {
  let component: BookhallComponent;
  let fixture: ComponentFixture<BookhallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookhallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
