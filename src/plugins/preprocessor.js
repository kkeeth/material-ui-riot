import { registerPreprocessor } from "@riotjs/compiler";
import babel from "@babel/core";

registerPreprocessor("javascript", "babel", function (code, { options }) {
  return babel.transform(code, {
    sourceMaps: true,
    retainLines: true,
    sourceFileName: options.file,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            edge: true,
          },
          loose: true,
          modules: false,
          useBuiltIns: "usage",
        },
      ],
    ],
  });
});
