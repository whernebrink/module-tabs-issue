import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";

export interface AppMenuSection {
  header: string;
  items: AppMenuSectionItem[];
}
export interface AppMenuSectionItem {
  header: string;
  link: string;
}

@Component({
  selector: "app-menu-section",
  templateUrl: "./app-menu-section.component.html",
  styleUrls: ["./app-menu-section.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppMenuSectionComponent {
  @Input() section!: AppMenuSection;
  @Output() clicked = new EventEmitter<AppMenuSectionItem>();
}
