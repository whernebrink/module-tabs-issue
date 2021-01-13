import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppMenuSectionComponent } from "./app-menu-section.component";

describe("AppMenuSectionComponent", () => {
  let component: AppMenuSectionComponent;
  let fixture: ComponentFixture<AppMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppMenuSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
