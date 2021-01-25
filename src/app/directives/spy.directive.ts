import {
  Directive,
  OnInit,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  Input,
  ElementRef,
} from "@angular/core";
let logCount = 0;
// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({ selector: "[appSpy]" })
export class SpyDirective
  implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  @Input() appSpy?: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.log("onInit");
  }

  ngAfterViewInit(): void {
    this.log("afterViewInit");
  }

  ngAfterContentInit(): void {
    this.log("afterContentInit");
  }

  ngOnDestroy(): void {
    this.log("onDestroy");
  }

  private log(methodName: string): void {
    logCount++;
    console.log(
      `${logCount}: Spy #${this.appSpy} ${methodName}`,
      this.elementRef
    );
  }
}
