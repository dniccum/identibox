/*global jQuery */
/*jshint browser:true */
/*!
* IdentiBox v1.1
*
* Copyright 2014, Doug Niccum - http://dniccumdesign.com + Luke Bettis
* Released under the GPL v2 license - http://www.gnu.org/licenses/gpl-2.0.html
*
*/

if (!jQuery) {
    throw 'IdentiBox requires jQuery to be loaded first';
}

var globalWidth;

(function( $ ){

    'use strict';

    $.identiBox = function(el, options) {    
        var identiBox = $(el);

        //Make variables public
        identiBox.vars = $.extend({}, $.identiBox.defaults, options);

        var selector = identiBox.selector;
        var identiSelector = $(selector);
        var maxHeight = Number(0);
        
        // TESTS
        if (identiSelector.length === 0) {
            throw 'No "' + selector + '" elements available to be selected.';
        }
        if (typeof identiBox.vars.responsiveActive !== 'boolean') {
            throw 'Please provide accurate boolean to active IdentiBox.';
        }
        if (isNaN(identiBox.vars.startResponsive) === true) {
            throw 'Please define an integer for the screen width.';
        }

        //CALCULATES THE HEIGHT
        function calculateHeight() {
            identiSelector.each(function() {
                var height = $(this).innerHeight();
                
                if (height >= maxHeight) {
                    maxHeight = Number(height);
                }
            });
            identiSelector.css('height', maxHeight);
        }

        //CLEARS HEIGHT
        function clearHeight() {
            identiSelector.css('height', 'auto');
        }

        //LOADS INITIATES ON PAGE LOAD
        $(window).ready(function() {
            var windowWidth = window.innerWidth;

            if (windowWidth >= identiBox.vars.startResponsive) {
                calculateHeight();
            }
        });

        //RECALCULATES ON WINDOW RESIZE
        $(window).resize(function(){
            var windowWidth = window.innerWidth;

            if (identiBox.vars.responsiveActive) {
                if (windowWidth >= identiBox.vars.startResponsive) {
                    clearHeight();
                    calculateHeight();
                } else {
                    clearHeight();
                }
            }
        });
    }

    //DEFAULT SETTINGS
    $.identiBox.defaults = {
        // RESPONSIVE SETTINGS
        responsiveActive: true,          //BOOLEAN - Enables/disable plugin when the window is resized to the 'startResponsive' value
        startResponsive: 960             //INTEGER - When screen width proceeds below this value, responsive attributes will take effect; use in conjunction with 'responsiveSettings'
    }
    
    $.fn.identiBox = function(options) {
        if (options === undefined) options = {};
        
        //Initializes the plugin
        new $.identiBox(this, options);
    };

})( window.jQuery );