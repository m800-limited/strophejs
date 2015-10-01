var config;
if (typeof(require) === 'undefined') {
    /* XXX: Hack to work around r.js's stupid parsing.
     * We want to save the configuration in a variable so that we can reuse it in
     * tests/main.js.
     */
    require = {
        config: function (c) {
            config = c;
        }
    };
}

require.config({
    baseUrl: '.',
    paths: {
        // Strophe.js src files
		"strophe":              "src/wrapper",

        // Examples
        "basic":            "examples/basic",

        // Tests
		"jquery":		    "bower_components/jquery/dist/jquery",
		"sinon":		    "bower_components/sinon/index",
		"sinon-qunit":      "bower_components/sinon-qunit/lib/sinon-qunit",
		"tests":		    "tests/tests"
    }
});

if (typeof(require) === 'function') {
    require(["strophe"], function(Strophe) {
        window.Strophe = Strophe;
    });
}
