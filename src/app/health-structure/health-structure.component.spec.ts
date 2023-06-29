import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStructureComponent } from './health-structure.component';

describe('HealthStructureComponent', () => {
  let component: HealthStructureComponent;
  let fixture: ComponentFixture<HealthStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthStructureComponent]
    });
    fixture = TestBed.createComponent(HealthStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
