#! /usr/bin/env node

var shell = require("shelljs");

shell.exec("git add -A . && git commit -a -m 'up'");
