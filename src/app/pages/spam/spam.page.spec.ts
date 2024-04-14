import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpamPage } from './spam.page';

describe('SpamPage', () => {
  let component: SpamPage;
  let fixture: ComponentFixture<SpamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
