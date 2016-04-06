/**
* mocha入口
*/
// Configure RequireJS
require.config({
    baseUrl: './',
    urlArgs: "v=" + (new Date()).getTime()
});

// Require libraries
require(['require'], function (require) {
    
    // Chai
    assert = chai.assert;
    chaiShould = chai.Should();
    expect = chai.expect;
    // chai.use();

    // Mocha
    mocha.setup('bdd');


    // Require base tests before starting
    require(['specs/cmd.specs'], function (person) {
//        mocha.setup({ globals: ['hasCert'] });
        // Start runner
        if (window.mochaPhantomJS) {
            mochaPhantomJS.run();
        }
        else { mocha.run(); }
    });

});