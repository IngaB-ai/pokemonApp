import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDisplaySettingsComponent } from './app-display-settings.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppDisplaySettingsComponent', () => {
  let component: AppDisplaySettingsComponent;
  let fixture: ComponentFixture<AppDisplaySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDisplaySettingsComponent ],
      imports: [HttpClientModule]
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
