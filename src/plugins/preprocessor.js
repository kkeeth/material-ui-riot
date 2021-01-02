import { registerPostprocessor } from "@riotjs/compiler";
import babel from "@babel/core";

registerPostprocessor((code, { options }) => {
  return babel.transform(code, {
    sourceMaps: true,
    retainLines: true,
    sourceFileName: options.file,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            ie: 11,
            node: 12
          },
          loose: true,
          useBuiltIns: "entry"
        }
      ]
    ]
  });
});
