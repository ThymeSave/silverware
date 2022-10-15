import { ViewportRuler } from "@angular/cdk/overlay";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

type SwipeDirection = "right" | "left"

@Component({
  selector: 'app-swipable-element',
  styleUrls: ['./swipable-element.component.scss'],
  templateUrl: './swipable-element.component.html',
})
export class SwipableElementComponent implements AfterViewInit {
  private _distance: number | null = null;

  @Input() public leftBackgroundColor ?: string;
  @Input() public rightBackgroundColor ?: string;

  @Input() public enableRightAction : boolean = true;
  @Input() public enableLeftAction : boolean = true;

  @Output() public leftActionTriggered = new EventEmitter<void>();
  @Output() public rightActionTriggered = new EventEmitter<void>();

  public get leftActionStyle() {
    return this.leftBackgroundColor ? `background:${this.leftBackgroundColor}` : "";
  }

  public get rightActionStyle() {
    return this.rightBackgroundColor ? `background:${this.rightBackgroundColor}` : "";
  }

  public get distance(): string | null {
    if (this._distance == null) {
      return null;
    }

    let distance = this._distance;
    if (this._distance > this.wrapperMaxWidth) {
      distance = this.wrapperMaxWidth;
    }

    return `${distance}px`;
  }

  private get isInPan() {
    return this._distance != null;
  }

  private get isOverTriggerThreshold() {
    if (this._distance == null) {
      return false;
    }

    return this._distance > (this.wrapperMaxWidth / 100 * 25);
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
    return this.isInPan && this.direction == "left" ? 'margin-left: -' + this.distance : "";
  }

  @ViewChild("contentRoot") contentRoot !: ElementRef;

  public constructor(private viewPortRuler: ViewportRuler,
                     private ref: ChangeDetectorRef) {
    this.viewPortRuler.change(200)
      .subscribe(() => this.setContentRootWidth());
  }

  private setContentRootWidth() {
    const contentRootNode = this.contentRoot.nativeElement as HTMLDivElement;
    this.wrapperMaxWidth = contentRootNode.clientWidth;

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
    if(!this.enableLeftAction) return;

    if (this.isActivePanTo("left")) {
      this.updatePanState(Math.abs(e.deltaX), "left");
    } else {
      this.updatePanState(e.distance, "right");
    }
  }

  public onPanLeft(e: any) {
    if(!this.enableRightAction) return;

    if (this.isActivePanTo("right")) {
      this.updatePanState(e.deltaX, "right");
    } else {
      this.updatePanState(e.distance, "left");
    }
  }

  public onPanEnd() {
    if (this.isOverTriggerThreshold) {
      const emitter = this.direction == "left" ? this.rightActionTriggered : this.leftActionTriggered;
      console.debug("Trigger", this.direction);
      emitter.next();
    }
    this.resetPanState();
  }

  private updatePanState(distance: number | null, direction: SwipeDirection) {
    this._distance = distance;
    this.direction = direction;
  }

  public resetPanState() {
    this.direction = null;
    this._distance = null;
  }
}
