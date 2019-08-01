import './test1.css'

require.ensure([], function(require) {
    var a = require("./test2");
    a()
}, 'tips');