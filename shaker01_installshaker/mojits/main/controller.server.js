/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('main', function(Y, NAME) {

/**
 * The main module.
 *
 * @module main
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
            ac.models.get('mainModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                
                ac.done({
                    example: 'Installing Shaker',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-models-addon', 'mainModelFoo']});
