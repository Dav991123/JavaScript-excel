class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
    document.querySelector(selector):
    selector;
  }
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    html('');
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
  get data() {
    return this.$el.dataset;
  }
  closest(selector) {
    return $(this.$el.closest(selector));
  }
  getCoords() {
    return this.$el.getBoundingClientRect();
  }
  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  css(style = {}) {
    return Object.assign(this.$el.style, style);
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, className='') => {
  const el = document.createElement(tagName);
  className && el.classList.add(className);
  return $(el);
};
