/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Simple', function(Y, NAME) {

/**
 * The Simple module.
 *
 * @module Simple
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            var data = 'index';

                ac.done({
                    status: 'Shaker is working for action: index',
                    data: data
                });
        },
        foo: function(ac) {
            var data = 'foo!';
            ac.done({
                status: 'Shaker is working for action: foo',
                data: data
            });
        },
        update: function (ac) {
            ac.done({data:'updated!'});
        }

    };

}, '0.0.1', {requires: ['mojito']});
