import './test1.css'
import './test2.css'
import './common'

require.ensure([], function(require) {
    var a = require("./test2");
    a()
});