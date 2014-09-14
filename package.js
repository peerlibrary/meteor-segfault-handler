Package.describe({
  summary: "Capture Meteor stack trace on SIGSEGV and SIGBUS signals",
  version: '0.1.4',
  name: 'mrt:segfault-handler',
  git: 'https://github.com/peerlibrary/meteor-segfault-handler.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:segfault-handler@0.1.4');
});
