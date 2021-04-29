import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeComponentComponent } from './delete-employee-component.component';

describe('DeleteEmployeeComponentComponent', () => {
  let component: DeleteEmployeeComponentComponent;
  let fixture: ComponentFixture<DeleteEmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
