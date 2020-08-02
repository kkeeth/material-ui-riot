import { install } from "riot";
export default class RiotHelpers {
  /**
   * Find tag in pack
   */
  findTag(pack, name) {
    let searched = null;
    pack.forEach(function (tag) {
      if (
        tag.root.getAttribute("name").toLowerCase() == name.toLowerCase() ||
        tag.root.tagName.toLowerCase() == name.toLowerCase() ||
        tag.root.getAttribute("ref").toLowerCase() == name.toLowerCase()
      ) {
        searched = tag;
      }
    });
    return searched;
  }
  /**
   * By the default riot don't support a camel case options
   * but in some cases we just use camel case, like a options
   * for instance
   */
  turnHyphensPropsToCamelCase(props) {
    for (let p in props) {
      if (/-/.test(p)) {
        const camelCased = p.replace(/-([a-z])/g, function (g) {
          return g[1].toUpperCase();
        });
        props[camelCased] = props[p];
        delete props[p];
      }
    }
  }
}

install((component) => {
  component.helpers = RiotHelpers;

  return component;
});
