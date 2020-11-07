import {capitalize} from '../core/utils';
const getEventName = eventName => `on${capitalize(eventName)}`;
const errorMessage = {
  methodName: (methodName, componentName) => (
    `Method ${methodName} is not implemented in ${componentName} Components`
  )
};

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getEventName(listener);
      if (!this[method]) {
        throw new Error(errorMessage.methodName(method, this.name));
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }
  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getEventName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}


