///////////////////////////////////////////////////////////////////////////////////////////////////
// Code Mirror directive - mirrors inner HTML of the block it is applied to, into a named code 
//                         display box for documentation.
//////////////////////////////////////////////////////////////////////////////////////////////////
'use strict';

exports.inject = function (app) {
    app.directive('jhCodeMirror', exports.directive)
};

exports.directive = function () {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            // get the target div to inject our code into
            var target = attrs.jhCodeMirror;            

            // get the inner html of our source and treat it for display
            var html = element[0].innerHTML;
            html = html.substring(html.indexOf('<'));                   // remove leading whitespace and newlines
            html = html.substring(0, html.lastIndexOf('>') + 1);        // remove trailing whitespace and newlines
            html = html.replace(/</g, '&lt;');                          // escape tag openings
            html = html.replace(/>/g, '&gt;');                          // escape tag closings
            html = html.replace(/(?:\r\n|\r|\n)/g, '<br />');           // replace text newlines with html breaks
            html = html.replace(/    /g, '<div class="tab"></div>');    // replace sets of 4 spaces with a spacer block to simulate tabs
            
            // insert the treated text into the <code> block in our chosen div
            var mirror = angular.element(document.querySelector('#' + target));
            mirror[0].children[1].children[0].innerHTML = html;

            // optional google-code-prettify call
            if(prettyPrint) {
                prettyPrint();
            }

        }

    };

};