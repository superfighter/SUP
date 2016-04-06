/**
* mocha入口
*/
// Configure RequireJS
require.config({
    baseUrl: './',
    urlArgs: "v=" + (new Date()).getTime()
});

// Require libraries
// require(['require', '../../node_modules/chai/chai', '../../node_modules/chai-jq/chai-jq'], function (require, chai, plugin) {
require(['require'], function (require) {
    
    // Chai
    assert = chai.assert;
    chaiShould = chai.Should();
    expect = chai.expect;
    // chai.use();

    // Mocha
    mocha.setup('bdd');


    // Require base tests before starting
    require(['specs/tests.specs'], function (person) {
//        mocha.setup({ globals: ['hasCert'] });
        // Start runner
        if (window.mochaPhantomJS) {
            mochaPhantomJS.run();
        }
        else { mocha.run(); }
    });

});
// define('fk',[],function(require){
//     var chai = require('../../node_modules/chai/chai');
//     var plugin = require('../../node_modules/chai-jq/chai-jq');
//     console.log(chai);
//     // Chai
//     // assert = chai.assert;
//     // chaiShould = chai.Should();
//     // expect = chai.expect;
//     // chai.use(plugin);

//     // Mocha
//     mocha.setup('bdd');


//     // Require base tests before starting
//     seajs.use(['./specs/tests.specs'], function (person) {
// //        mocha.setup({ globals: ['hasCert'] });
//         // Start runner
//         if (window.mochaPhantomJS) {
//             mochaPhantomJS.run();
//         }
//         else { mocha.run(); }
//     });
// })
// seajs.use('fk');