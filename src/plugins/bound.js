/**
 * Bound class contain methods for
 * receiving bounds of DOM element.
 */
import { install } from "riot";

export default class Bound {
  /**
   * Get Bounds
   * @return {*}
   */
  receiveBound() {
    if (!this.container) {
      console.error(`
        Yor class must contain a container. \n
        It is DOM Element. Define please this.container property.
      `);
    }
    let document;
    let window;
    let box;
    const doc = this.container && this.container.ownerDocument;

    // Get document
    document = doc.documentElement;
    // Get container
    if (typeof this.container.getBoundingClientRect !== typeof undefined) {
      box = this.container.getBoundingClientRect();
    }
    window = this.getWindow(doc);
    // Return BoundingRect with additional properties.
    return this.mix(box, {
      size: Math.max(box.width, box.height),
      offsetTop: box.top + window.pageYOffset - document.clientTop,
      offsetLeft: box.left + window.pageXOffset - document.clientLeft,
    });
  }

  /**
   * Window or not?
   * @param {object} o - supposing object
   * @return {boolean}
   */
  isWindow(o) {
    return o !== null && o === o.window;
  }

  /**
   * Get window method
   * @param {object} o - supposing object
   * @return {*}
   */
  getWindow(o) {
    return this.isWindow(o) ? o : o.nodeType === 9 && o.defaultView;
  }

  /**
   * Simple mixin. Unfortunately, babel doesn't support Object.assign \ or mixin
   * @param {object} so
   * @param {object} to
   * @return {*}
   */
  mix(so, to) {
    for (const key in so) {
      // only copy if not already present
      if (!(key in to)) {
        to[key] = so[key];
      }
    }
    return to;
  }
}

install((component) => {
  component.Bound = Bound;

  return component;
});
