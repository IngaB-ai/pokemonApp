import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesDescriptionComponent } from './abilities-description.component';

describe('AbilitiesDescriptionComponent', () => {
  let component: AbilitiesDescriptionComponent;
  let fixture: ComponentFixture<AbilitiesDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitiesDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitiesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
