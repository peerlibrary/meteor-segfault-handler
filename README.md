segfault-handler package
========================

Meteor package for capturing node.js stack trace on `SIGSEGV` or `SIGBUS` signals and receiving a callback
when they occur. It is built upon [node-segfault-handler](https://github.com/ddopson/node-segfault-handler)
node.js package.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `SegfaultHandler` object into
the global scope.

You can use `SegfaultHandler.registerHandler` to register a callback which receives `stack`, `signal`, and
`address` arguments. You can use that callback to log the signal or in some other way handle the signal,
but you should be careful that code is not too complex. When `SIGSEGV` or `SIGBUS` signals are received by
your Meteor application it means that it did an illegal memory operation and its state is undefined.

Server side only.

Installation
------------

```
mrt add segfault-handler
```

Example
-------

```coffee
SegfaultHandler.registerHandler (stack, signal, address) ->
  message = "Received SIGSEGV/SIGBUS (#{ signal }) for address 0x#{ address.toString(16) }"
  stack = stack.join '\n'
  Log.error "#{ message }\n#{ stack }"

  Errors.insert
    message: message
    stack: stack
```
