"use strict";

var items = JSON.parse(localStorage.getItem('items')) || [];
var input = document.querySelector('.input');
var container = document.querySelector('.container');
var editable = -1;

var print = function print() {
  var containerContent = '';
  items.map(function (item, index) {
    containerContent = containerContent + "<div class=\"item\">\n            <div class=\"text\" contenteditable=\"".concat(editable === index, "\" >").concat(item, "</div>\n            <div class=\"row\">\n                <button class=\"editButton\" onclick=\"edit(").concat(index, ")\" style=\"display: ").concat(editable === index && editable >= 0 ? "none" : "initial", "\">Edit</button>\n                <button class=\"saveButton\" onclick=\"save(").concat(index, ", this)\" style=\"display: ").concat(editable === index && editable >= 0 ? "initial" : "none", "\">Save</button>\n                <div class=\"divider\"></div>\n                <button class=\"removeButton\" onclick=\"remove(").concat(index, ")\">Remove</button>\n            </div>\n        </div>");
  });
  container.innerHTML = containerContent;
};

var add = function add() {
  items.push(input.value);
  localStorage.setItem('items', JSON.stringify(items));
  print();
};

var edit = function edit(index) {
  editable = index;
  print();
};

var save = function save(index, that) {
  items[index] = that.parentElement.parentElement.querySelector(".text").innerHTML;
  editable = -1;
  localStorage.setItem('items', JSON.stringify(items));
  print();
};

var remove = function remove(index) {
  items.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items));
  print();
};

print();