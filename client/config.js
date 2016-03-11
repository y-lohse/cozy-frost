System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.1.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@2.1.0",
    "fetch": "github:github/fetch@0.10.1",
    "moment": "npm:moment@2.11.2",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.1.3": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.3",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.1.0": {
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.2": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "core-js": "npm:core-js@2.1.0"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.11.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "app-build-d5c126cdef.js": [
      "SnapshotsDB.js",
      "add-snapshot-form.html!github:systemjs/plugin-text@0.0.3.js",
      "add-snapshot-form.js",
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "date-format.js",
      "index.html!github:systemjs/plugin-text@0.0.3.js",
      "index.js",
      "main.js",
      "snapshot.html!github:systemjs/plugin-text@0.0.3.js",
      "snapshot.js",
      "snapshots-list.html!github:systemjs/plugin-text@0.0.3.js",
      "snapshots-list.js"
    ],
    "aurelia-b23cdcaf13.js": [
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.1.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.1.3.js",
      "npm:aurelia-binding@1.0.0-beta.1.1.3/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.0.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.3.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.3/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.2.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.2/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.4/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.3.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.3/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.1.0.js",
      "npm:aurelia-path@1.0.0-beta.1.1.0/aurelia-path.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.1.1.js",
      "npm:aurelia-router@1.0.0-beta.1.1.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.1/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.1.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.1/aurelia-templating.js",
      "npm:core-js@2.1.0.js",
      "npm:core-js@2.1.0/client/shim.min.js",
      "npm:moment@2.11.2.js",
      "npm:moment@2.11.2/moment.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js"
    ]
  },
  depCache: {
    "add-snapshot-form.js": [
      "npm:aurelia-framework@1.0.0-beta.1.1.3.js",
      "SnapshotsDB.js"
    ],
    "date-format.js": [
      "npm:moment@2.11.2.js"
    ],
    "snapshot.js": [
      "npm:aurelia-framework@1.0.0-beta.1.1.3.js",
      "SnapshotsDB.js"
    ],
    "snapshots-list.js": [
      "npm:aurelia-framework@1.0.0-beta.1.1.3.js",
      "SnapshotsDB.js"
    ],
    "SnapshotsDB.js": [
      "npm:aurelia-framework@1.0.0-beta.1.1.3.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.0.js"
    ]
  }
});