#!/usr/bin/env node
"use strict";

var fs = require("fs");
var path = require("path");
var palavr = require("palavr");
var lista = fs.readdirSync(path.join(__dirname, "palavroes")).sort();
var objeto = {};

lista.forEach(function (arquivo) {
  var palavrao = path.parse(arquivo).name;
  var diretorio = path.join(__dirname, "palavroes", arquivo);
  var conteudo = fs.readFileSync(diretorio, "utf-8");

  objeto[palavrao] = palavr(conteudo);
});

objeto = JSON.stringify(objeto, null, 2);

fs.writeFileSync(path.join(__dirname, "index.json"), objeto);
