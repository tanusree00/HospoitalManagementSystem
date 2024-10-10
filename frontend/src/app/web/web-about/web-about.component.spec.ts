import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAboutComponent } from './web-about.component';

describe('WebAboutComponent', () => {
  let component: WebAboutComponent;
  let fixture: ComponentFixture<WebAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
