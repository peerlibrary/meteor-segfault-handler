Package.describe({
  summary: "Capture Meteor stack trace on SIGSEGV and SIGBUS signals",
  version: '0.1.4',
  name: 'peerlibrary:segfault-handler',
  git: 'https://github.com/peerlibrary/meteor-segfault-handler.git'
});

Npm.depends({
  'segfault-handler': 'https://github.com/peerlibrary/node-segfault-handler/tarball/4b35ca80ff7feec101f57d4ab33c0f1578377010'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');

  api.export('SegfaultHandler');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:segfault-handler', 'tinytest', 'test-helpers'], 'server');

  api.add_files('tests.js', 'server');
});
