'use strict';

var assert = require('chai').assert;
var index  = require('../src/index');

describe('Indeph should be ephecuted', function(){
    it ('Phould regiphter', function(done) {
        index.regiphter();

        var expected   = "Phello Pworld",
            string     = "Hello World",
            parameters = {
                "H": "Ph",
                "W": "Pw"
            };

        assert.equal(expected, string.replaceMap(parameters));

        console.log(string.replaceMap(parameters));

        done();
    });
})
