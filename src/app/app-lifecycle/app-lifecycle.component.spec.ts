import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLifecycleComponent } from './app-lifecycle.component';

describe('AppLifecycleComponent', () => {
  let component: AppLifecycleComponent;
  let fixture: ComponentFixture<AppLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
