import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLinkComponent } from './short-link.component';

describe('ShortLinkComponent', () => {
  let component: ShortLinkComponent;
  let fixture: ComponentFixture<ShortLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
