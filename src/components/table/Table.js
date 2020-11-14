import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './tableTemplate';
import {resizeHandler} from './tableResize';
import {shouldResize} from './tableFunctions';
export class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }

  static className = 'excel__table';
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }

  toHTML() {
    return createTable();
  }
}
