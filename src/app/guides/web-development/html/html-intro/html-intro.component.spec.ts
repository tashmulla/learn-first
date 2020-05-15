import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIntroComponent } from './html-intro.component';

describe('HtmlIntroComponent', () => {
  let component: HtmlIntroComponent;
  let fixture: ComponentFixture<HtmlIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
