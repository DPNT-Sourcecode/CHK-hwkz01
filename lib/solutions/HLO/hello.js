'use strict';

module.exports = function (friendName) {
    const append = friendName===undefined ? "World" : friendName;
    return "Hello, "+append+"!"
};