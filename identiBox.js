/*global jQuery */
/*jshint browser:true */
/*!
* IdentiBox v1.0
*
* Copyright 2014, Doug Niccum - http://dniccumdesign.com + Luke Bettis
* Released under the GPL v2 license - http://www.gnu.org/licenses/gpl-2.0.html
*
*/

if (!jQuery) {
    throw 'Identi Box requires jQuery to be loaded first';
}

(function( $ ){

    'use strict';

    $.fn.identiBox = function() {
        var selector = $(this).selector;
        var identiSelector = $(selector);
        var maxHeight = Number(0);
        
        if (identiSelector.length === 0) {
            throw 'No "' + selector + '" elements available to be selected.';
        }

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
            var windowWidth = window.innerWidth();
            
            if (windowWidth >= 768) {
                calculateHeight();
            }
        });

        //RECALCULATES ON WINDOW RESIZE
        $(window).resize(function(){
            var windowWidth = window.innerWidth();

            if (windowWidth >= 768) {
                clearHeight();
                calculateHeight();
            } else {
                clearHeight();
            }
        });
    };

})( window.jQuery );