"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const nums: number[] = [];
var nums = [];
var colors = [];
var inputEl = document.querySelector("#username");
console.dir(inputEl);
var btn = document.querySelector(".btn");
// function numberIdentity(item: number): number{
//   return item;
// }
// function stringIdentity(item: string): string{
//   return item;
// }
// function booleanIdentity(item: boolean): boolean{
//   return item;
// }
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>("hello");
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3]));
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
// const wrongExample = merge({ name: "colt"}, 9)
var comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(comboObj);
function makeEmptyArray() {
    return [];
}
var numbers = makeEmptyArray();
var bools = makeEmptyArray();
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist();
var videos = new Playlist();
