import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesitonListComponent } from './quesiton-list.component';

describe('QuesitonListComponent', () => {
  let component: QuesitonListComponent;
  let fixture: ComponentFixture<QuesitonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesitonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesitonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
