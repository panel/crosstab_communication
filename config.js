System.config({
  "paths": {
    "*": "*.js",
    "kayak/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "dom-event": "npm:dom-event@0.0.4",
    "local-storage": "npm:local-storage@1.3.1",
    "lodash-node": "npm:lodash-node@2.4.1",
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:lodash-node@2.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

