/**
* mocha入口
*/
// Configure RequireJS
require.config({
    baseUrl: './',
    urlArgs: "v=" + (new Date()).getTime()
});

// Require libraries
require(['require', '../node_modules/chai/chai', '../node_modules/chai-jq/chai-jq'], function (require, chai, plugin) {
    
    // Chai
    assert = chai.assert;
    chaiShould = chai.Should();
    expect = chai.expect;
    chai.use(plugin);

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