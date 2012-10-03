/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('SimpleBinderIndex', function(Y, NAME) {

/**
 * The SimpleBinderIndex module.
 *
 * @module SimpleBinderIndex
 */

    /**
     * Constructor for the SimpleBinderIndex class.
     *
     * @class SimpleBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;
            Y.one('#update').on('click', function (e) {
                this.mojitProxy.invoke('update',{}, function (data, meta) {
                    console.log(arguments);
                });
            },this);
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
