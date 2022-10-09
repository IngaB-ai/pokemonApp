import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDisplaySettingsComponent } from './app-display-settings.component';

describe('AppDisplaySettingsComponent', () => {
  let component: AppDisplaySettingsComponent;
  let fixture: ComponentFixture<AppDisplaySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDisplaySettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDisplaySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
