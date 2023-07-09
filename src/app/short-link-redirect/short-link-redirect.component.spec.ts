import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLinkRedirectComponent } from './short-link-redirect.component';

describe('ShortLinkRedirectComponent', () => {
  let component: ShortLinkRedirectComponent;
  let fixture: ComponentFixture<ShortLinkRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortLinkRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortLinkRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
