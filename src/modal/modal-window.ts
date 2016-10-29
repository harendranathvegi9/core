import {
  Component,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  Renderer,
  OnInit,
  AfterViewInit,
  OnDestroy,
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/core';

import {ModalDismissReasons} from './modal-dismiss-reasons';

@Component({
  selector: 'ngb-modal-window',
  host: {
    '[class]': '"modal fade" + (windowClass ? " " + windowClass : "")',
    'role': 'dialog',
    'tabindex': '-1',
    '[style.display]': '"block"',
    '[@fade]': '"active"',
    '(keyup.esc)': 'escKey($event)',
    '(click)': 'backdropClick()'
  },
  template: `
    <div [class]="'modal-dialog' + (size ? ' modal-' + size : '')" [@slide]="'active'" role="document">
        <div class="modal-content" (click)="stopPropagation($event)"><ng-content></ng-content></div>
    </div>
  `,
  animations: [
    trigger(
        'fade',
        [
          state('active', style({opacity: 1})),
          transition(':enter', [animate('0.15s')]),
          transition(':leave', [animate('0.15s'), style({opacity: 0})]),
        ]),
    trigger(
        'slide',
        [
          state('active', style({transform: 'translate(0,0)'})),
          transition(':enter', [animate('0.3s ease-out')]),
          transition(':leave', [animate('0.3s ease-out'), style({transform: 'translate(0, -25%)'})]),
        ])
  ]
})
export class NgbModalWindow implements OnInit,
    AfterViewInit, OnDestroy {
  private _elWithFocus: Element;  // element that is focused prior to modal opening

  @Input() backdrop: boolean | string = true;
  @Input() keyboard = true;
  @Input() size: string;
  @Input() windowClass: string;

  @Output('dismiss') dismissEvent = new EventEmitter();

  constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

  backdropClick(): void {
    if (this.backdrop === true) {
      this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
    }
  }

  escKey($event): void {
    if (this.keyboard && !$event.defaultPrevented) {
      this.dismiss(ModalDismissReasons.ESC);
    }
  }

  dismiss(reason): void { this.dismissEvent.emit(reason); }

  stopPropagation($event: MouseEvent): void { $event.stopPropagation(); }

  ngOnInit() {
    this._elWithFocus = document.activeElement;
    this._renderer.setElementClass(document.body, 'modal-open', true);
  }

  ngAfterViewInit() {
    if (!this._isNodeChildOfAnother(this._elRef.nativeElement, document.activeElement)) {
      this._renderer.invokeElementMethod(this._elRef.nativeElement, 'focus', []);
    }
  }

  ngOnDestroy() {
    if (this._elWithFocus && this._isNodeChildOfAnother(document.body, this._elWithFocus)) {
      this._renderer.invokeElementMethod(this._elWithFocus, 'focus', []);
    } else {
      this._renderer.invokeElementMethod(document.body, 'focus', []);
    }

    this._elWithFocus = null;
    this._renderer.setElementClass(document.body, 'modal-open', false);
  }

  private _isNodeChildOfAnother(parentNode, potentialChildNode) { return parentNode.contains(potentialChildNode); }
}
