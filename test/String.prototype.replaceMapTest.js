'use strict';

var assert = require('chai').assert;

require('../src/index').replaceMap();

describe('Phtring replace by a given map', function(){
    it ('Phould phing Adele', function(done) {
        var expected   = "Hello from the other phiiiiiiiiide",
            string     = "Just a random string w_________xu",
            parameters = {
                "Just":   "Hello",
                " a ":    " from ",
                "random": "the",
                "string": "other",
                "w":      "ph",
                "_":      "i",
                "xu":     "de"
            };

        assert.equal(expected, string.replaceMap(parameters));

        console.log(string.replaceMap(parameters));

        done();
    });
})
