#!/usr/bin/env node

var ponzir = require('ponzir');
var argv = require('named-argv');

if (!argv.opts.name) {
  console.log("A Ponzir node must have a name.");
  process.exit();
}

ponzir.create(argv.opts.name);

if (argv.opts.establish) {
  ponzir.establish();
}

ponzir
	.setAddress(argv.opts.address)
	.setPort(argv.opts.port)
	.listen();
