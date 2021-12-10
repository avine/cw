import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cw-icon',
  templateUrl: './cw-icon.component.html',
  styleUrls: ['./cw-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CwIconComponent {
  @Input() icon!:
    | 'drawLine'
    | 'undo'
    | 'redo'
    | 'cut'
    | 'undoAll'
    | 'guides'
    | 'redraw'
    | 'expand'
    | 'collapse'
    | 'drag'
    | 'dispose';
}
