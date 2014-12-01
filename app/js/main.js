'use strict';

require.config({
    paths: {
        angular: '../lib/angular/angular'
    },
    shim: {
        'angular': {'exports' : 'angular'}
    }
});

require(['angular'], function(angular) {
    console.log("Hello World!");
});
