Package.describe({
  summary: "Capture Meteor stack trace on SIGSEGV and SIGBUS signals"
});

Npm.depends({
  'segfault-handler': "https://github.com/ddopson/node-segfault-handler/tarball/af7c153b2417e5baad99dedc3f6c80c854bfe490"
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
