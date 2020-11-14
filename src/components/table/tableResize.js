import {$} from '../../core/dom';

export const resizeHandler = ($root, event) => {
  const $resize = $(event.target);
  // const $parent = $resize.$el.parentNode; bad
  // const $parent = $resize.$el.closest('.column'); bad
  const $parent = $resize.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resize.data.resize;
  const dataCol = $parent.data.col;
  const sideProp = type === 'col' ? 'bottom': 'right';
  let value;

  $resize.css({
    opacity: 1,
    [sideProp]: '-5000px'
  });

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - coords.right;
      value = coords.width + delta;
      $resize.css({right: -delta + 'px'});
    } else {
      const delta = e.pageY - coords.bottom;
      value = coords.height + delta;
      $resize.css({bottom: -delta + 'px'});
    }
  };
  document.onmouseup = () => {
    $parent.css({width: (value) + 'px'});
    if (type === 'col') {
      $root.findAll(`[data-col="${dataCol}"]`)
          .forEach(el => el.style.width = (value) + 'px');
    } else {
      $parent.css({height: (value) + 'px'});
    }

    document.onmousemove = null;
    $resize.css({
      opacity: 0,
      right: 0,
      bottom: 0
    });
  };
};
