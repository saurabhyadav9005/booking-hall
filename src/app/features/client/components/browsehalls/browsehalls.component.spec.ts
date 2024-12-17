import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsehallsComponent } from './browsehalls.component';

describe('BrowsehallsComponent', () => {
  let component: BrowsehallsComponent;
  let fixture: ComponentFixture<BrowsehallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowsehallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowsehallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
