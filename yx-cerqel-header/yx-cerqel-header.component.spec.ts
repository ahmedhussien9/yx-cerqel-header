import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YxCerqelHeaderComponent } from './yx-cerqel-header.component';

describe('YxCerqelHeaderComponent', () => {
  let component: YxCerqelHeaderComponent;
  let fixture: ComponentFixture<YxCerqelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YxCerqelHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YxCerqelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
