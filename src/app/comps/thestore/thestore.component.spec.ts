import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThestoreComponent } from './thestore.component';

describe('ThestoreComponent', () => {
  let component: ThestoreComponent;
  let fixture: ComponentFixture<ThestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThestoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
