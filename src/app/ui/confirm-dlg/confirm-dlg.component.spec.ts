import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDlgComponent } from './confirm-dlg.component';

describe('ConfirmDlgComponent', () => {
  let component: ConfirmDlgComponent;
  let fixture: ComponentFixture<ConfirmDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDlgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
