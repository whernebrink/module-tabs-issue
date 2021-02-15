import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Subject } from "rxjs";

interface TabItem {
  id: string;
  title: string;
}

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  tabOptions = {
    appMenuTrigger: true,
    // appMenuTriggerText: " ",
    appMenuTriggerTextAudible: true,
  };

  private tabItems: TabItem[] = [];
  private tabItemsSub = new Subject<TabItem[]>();
  tabItems$ = this.tabItemsSub.asObservable();
  get hasTabItems() {
    return this.tabItems.length;
  }

  beforeCloseCallback = (event: SohoTabsEvent, tab: JQuery) => {
    if (tab) {
    }
    const tabId = tab.find("a")?.attr("href")?.replace("#", "");
    if (tabId) {
      this.tabItems = this.tabItems.filter((item) => item.id !== tabId);
      this.tabItemsSub.next(this.tabItems);
    }
  };

  addTab() {
    const tabCount = this.tabItems.length;
    const item = {
      id: `tab_${tabCount}`,
      title: `Tab ${tabCount}`,
    };
    this.tabItems.push(item);
    this.tabItemsSub.next(this.tabItems);
  }
}
