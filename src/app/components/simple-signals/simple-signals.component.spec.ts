import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSignalsComponent } from './simple-signals.component';

describe('SimpleSignalsComponent', () => {
  let component: SimpleSignalsComponent;
  let fixture: ComponentFixture<SimpleSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
