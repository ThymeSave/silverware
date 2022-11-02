import { ViewportRuler } from "@angular/cdk/overlay";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

type SwipeDirection = "right" | "left"

@Component({
  selector: 'app-swipeable-element',
  styleUrls: ['./swipeable-element.component.scss'],
  templateUrl: './swipeable-element.component.html',
})
export class SwipeableElementComponent implements AfterViewInit {
  private _distance: number | null = null;

  @Input() public leftBackgroundColor ?: string;
  @Input() public rightBackgroundColor ?: string;

  @Input() public enableRightAction: boolean = true;
  @Input() public enableLeftAction: boolean = true;

  @Output() public leftActionTriggered = new EventEmitter<void>();
  @Output() public rightActionTriggered = new EventEmitter<void>();

  public get leftActionStyle() {
    return {
      'background': this.leftBackgroundColor ?? "",
      'flex': `1 1 ${this.isPanLeft ? 0 : (this.distance ?? 0)}`,
      'transition': this.transitionStyle,
    };
  }

  private get transitionStyle() {
    return this.isInPan ? 'none' : '.3s ease-in-out';
  }

  public get rightActionStyle() {
    return {
      'background': this.rightBackgroundColor ?? "",
      'transition': this.transitionStyle,
    };
  }

  public get distance(): string | null {
    if (this._distance == null) {
      return null;
    }

    return `${this._distance}px`;
  }

  private get isInPan() {
    return this._distance != null;
  }

  private get isPanRight() {
    return this.direction == "right";
  }

  private get isPanLeft() {
    return this.direction == "left";
  }

  private get isOverTriggerThreshold() {
    if (this._distance == null) {
      return false;
    }
    if (this.isPanRight) {
      return this._distance > (this.wrapperMaxWidth * 0.25);
    }
    return this._distance > (this.wrapperMaxWidth * 0.5);
  }

  public direction: SwipeDirection | null = null;

  public wrapperMaxWidth !: number;

  public get contentRootStyle() {
    return this.isInPan ? `width:${this.wrapperMaxWidth}px` : "";
  }

  public get contentRootClasses() {
    return this.isOverTriggerThreshold ? ["trigger-action-threshold-reached"] : [];
  }

  public get elementStyle() {
    return {
      'margin-left': this.isPanLeft ? `-${this.distance}` : 0,
      'transition': this.transitionStyle,
    };
  }

  @ViewChild("contentRoot") contentRoot !: ElementRef<HTMLElement>;

  public constructor(private viewPortRuler: ViewportRuler,
                     private ref: ChangeDetectorRef) {
    this.viewPortRuler.change(200)
      .subscribe(() => this.setContentRootWidth());
  }

  private setContentRootWidth() {
    const contentRootNode = this.contentRoot.nativeElement as HTMLDivElement;
    this.wrapperMaxWidth = contentRootNode.clientWidth;
    console.log(contentRootNode.clientWidth, contentRootNode.scrollWidth, contentRootNode.offsetWidth);

    // prevent NG0100
    this.ref.detectChanges();
  }

  public ngAfterViewInit() {
    this.setContentRootWidth();
  }

  private isActivePanTo(direction: string) {
    return this.isInPan && this.direction == direction;
  }

  public onPanRight(e: any) {
    if (this.isScrollPan(e) || !this.enableLeftAction) {
      e.preventDefault();
      return;
    }

    if (this.isActivePanTo("left")) {
      this.updatePanState(e, "left");
    } else {
      this.updatePanState(e, "right");
    }
  }

  public onPanLeft(e: any) {
    if (this.isScrollPan(e) || !this.enableRightAction) {
      e.preventDefault();
      return;
    }

    if (this.isActivePanTo("right")) {
      this.updatePanState(e, "right");
    } else {
      this.updatePanState(e, "left");
    }
  }

  public onPanEnd() {
    if (this.isOverTriggerThreshold) {
      const emitter = this.isPanLeft ? this.rightActionTriggered : this.leftActionTriggered;
      console.debug("Trigger", this.direction);
      emitter.next();
    }
    this.resetPanState();
  }

  private isScrollPan(e: any) {
    const angle = Math.abs(e.angle);
    return (angle >= 90 && angle < 150) || (angle > 30 && angle < 90);
  }

  private updatePanState(e: any | null, direction: SwipeDirection) {
    let distance = e.distance;

    if (distance != null && distance > this.wrapperMaxWidth) {
      distance = this.wrapperMaxWidth;
    }

    this._distance = (distance ?? 0) < 0 ? 0 : distance;
    this.direction = direction;
  }

  public resetPanState() {
    this.direction = null;
    this._distance = null;
  }
}
