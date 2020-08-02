import { install } from "riot";

let Content = {
  init() {
    this.on("mount", () => {
      [].forEach.call(this.root.querySelectorAll("content"), (node) => {
        var selector = node.getAttribute("select");
        [].forEach.call(this.root.querySelectorAll(selector), (content) => {
          node.parentNode.insertBefore(content, node.nextSibling);
        });
        node.parentNode.removeChild(node);
      });
    });
  },
};

install((component) => {
  component.content = Content;

  return component;
});
