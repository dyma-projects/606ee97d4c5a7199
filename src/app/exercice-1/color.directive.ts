import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostListener("window:keydown", ["$event"]) windowKeydown(
    $event: KeyboardEvent
  ) {
    switch ($event.key) {
      case "ArrowDown":
        this.changeColor("red");
        break;
      case "ArrowUp":
        this.changeColor("blue");
        break;
      case "ArrowLeft":
        this.changeColor("green");
        break;
      case "ArrowRight":
        this.changeColor("yellow");
        break;
      default:
        break;
    }
  }

  constructor(private el: ElementRef<HTMLParagraphElement>) {}

  private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
