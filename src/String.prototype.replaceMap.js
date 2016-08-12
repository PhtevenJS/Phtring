'use strict';

String.prototype.replaceMap = function(parameters) {
    var string = this.toString();
    Object.keys(parameters).forEach(function(key){
        string = string.replace(new RegExp(key, 'g'), parameters[key]);
    });

    return string;
}
