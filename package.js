Package.describe({
  summary: "Capture Meteor stack trace on SIGSEGV and SIGBUS signals"
});

Npm.depends({
  'segfault-handler': "https://github.com/peerlibrary/node-segfault-handler/tarball/4b35ca80ff7feec101f57d4ab33c0f1578377010"
});

Package.on_use(function (api) {
  api.export('SegfaultHandler');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['segfault-handler', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
