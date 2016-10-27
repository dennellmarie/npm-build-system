var $ = require('jquery');

var makeBackgroundRed = function() {
    console.log('LOOK OUT FOR MEEEEE');
    $('body').css('background-color', 'red');
};

module.exports = makeBackgroundRed;
