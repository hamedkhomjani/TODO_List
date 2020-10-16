"use strict";

var items = JSON.parse(localStorage.getItem('items')) || [];
var input = document.querySelector('.input');
var container = document.querySelector('.container');

var print = function print() {
  var containerContent = '';
  items.map(function (item) {
    containerContent = containerContent + "<div class=\"item\">\n            <div class=\"text\">".concat(item, "</div>\n            <div class=\"row\">\n                <button class=\"editButton\">Edit</button>\n                <div class=\"divider\"></div>\n                <button class=\"removeButton\">Remove</button>\n            </div>\n        </div>");
  });
  container.innerHTML = containerContent;
};

var add = function add() {
  items.push(input.value);
  localStorage.setItem('items', JSON.stringify(items));
  print();
};

print();