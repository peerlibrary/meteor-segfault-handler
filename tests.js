Tinytest.add('segfault-handler', function (test) {
  var isDefined = false;
  try {
    SegfaultHandler;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "SegfaultHandler is not defined");
  test.isTrue(Package['peerlibrary:segfault-handler'].SegfaultHandler, "Package.peerlibrary:segfault-handler.SegfaultHandler is not defined");
});
